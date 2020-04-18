import { useState, useEffect } from "react"
import sift from "sift"
import events from "../data/events"
import parseEvents from "../utils/parseEvents"

const parsedEvents = parseEvents(events)

const triageFilter = filter => {
  // return appropriate filter based on type
  // where type can be
  // n: neighborhood
  // v: venue
  switch (filter.t) {
    case "n":
      return { neighborhood: { $eq: filter.value } }
    case "v":
      return { venue: { $eq: filter.value } }
    default:
      console.error(
        "triage type not specified in filter object. can be one of 'n', 't'",
        filter
      )
      return null
  }
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const evaluateCondition = condition => {
  if ("date" in condition) {

    if(condition.justToday){
      let date_without_time = condition.date.split("T")[0]
      let date_without_time_pieces = date_without_time.split("-")
      let day_after_num = pad(Number(date_without_time_pieces[2]) + 1, 2)
      let day_after = `${date_without_time_pieces[0]}-${date_without_time_pieces[1]}-${day_after_num}T01:00:00Z`
      console.log(new Date(day_after))
      console.log(new Date(date_without_time))
      return { date: { $and: [ {$gte: new Date(date_without_time + 'T01:00:00Z')}, { $lte: new Date(day_after)} ] } }
    } else {
      return { date: { $gte: new Date(condition.date) } }
    }
    
  } else if ("filters" in condition) {
    // handle 'filter filters'
    let filterConditions = { $or: [] }
    if(condition.filters.length > 0){
      condition.filters.forEach(filter => {
        // if filter is all for either venue or neighborhood,
        // return all those results
        let f
        filter.value === "all_v" ? (f = { venue: { $exists: true } }) : 
        filter.value === 'all_n' ? (f = { neighborhood: { $exists: true }}) : 
        (f = triageFilter(filter, filterConditions))
        if (f) {
          filterConditions['$or'].push(f)
        }
      })
    } else {
      filterConditions['$or'] = [{ venue: { $exists: true } }, { neighborhood: { $exists: true }}] 
    }

    return filterConditions

    // handle price filtering
  } else if ("price" in condition) {
    if (condition.price.value === "all") return { $or: [ { price: { $exists: true } }, { price: { $exists: false } } ] }
    if (condition.price.value === 0)
      return {
        price: { $eq: 0 },
      }
    return {
      price: { $lte: Number(condition.price.value) },
    }
  }
}

const evaluateConditions = conditions => {
  let allConditions = []
  conditions.forEach(condition => {
    let c = evaluateCondition(condition)
    if (c) {
      allConditions.push(c)
    }
  })
  return allConditions
}

const useSearcher = ( defaultConditions ) => {
  let [ conditions, setConditions ] = useState(defaultConditions)
  let [ results, setResults ] = useState()

  useEffect(() => {
    let result = parsedEvents

    if (conditions === "default") {
      setConditions([])
    } else {
      if (conditions && conditions.length > 1) {
        result = parsedEvents.filter(
          sift({ $and: evaluateConditions(conditions) })
        )
      } else if (conditions && conditions.length === 1) {
        result = parsedEvents.filter(sift(evaluateCondition(conditions[0])))
      }
    }
    console.log(conditions)
    setResults(result)
  }, [conditions, setConditions])


  return [setConditions, conditions, results]
}

export default useSearcher
