import { useState, useEffect } from "react"
import sift from "sift"
import events from "../data/events"
import parseEvents from "../utils/parseEvents"

const parsedEvents = parseEvents(events)

const triageFilter = (filter) => {
  // return appropriate filter based on type
  // where type can be
  // n: neighborhood
  // v: venue
  switch(filter.t){
    case "n":
      return { neighborhood: { $eq: filter.value } }
    case "v":
      return { venue: { $eq: filter.value } }
    default:
      console.error("triage type not specified in filter object. can be one of 'n', 't'", filter)
      return null
  }
}

const evaluateCondition = condition => {
  if ("date" in condition) {
    return { date: { $gte: new Date(condition.date) } }

  } else if ("filters" in condition) {
    
    // handle 'filter filters'
    let filterConditions = []
    condition.filters.forEach(filter => {
      let f = triageFilter(filter, filterConditions)
      if(f){
        filterConditions.push(f)
      }
    })
    return { $or: filterConditions }

    // handle price filtering
  } else if ("price" in condition) {
    if (condition.price === "all") return
    if (condition.price === 0) return { 
      price: { $eq: 0 } 
    }
    return { 
      price: { $lte: Number(condition.price) } 
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

const useSearcher = defaultConditions => {
  let [conditions, setConditions] = useState(defaultConditions)
  let [results, setResults] = useState()

  useEffect(() => {
    let result = parsedEvents

    if(conditions === "default"){
      setConditions([])
      
    } else {
      if (conditions && conditions.length > 1) {
        result = parsedEvents.filter(sift({ $and: evaluateConditions(conditions) }))
      } else if (conditions && conditions.length === 1) {
        result = parsedEvents.filter(sift(evaluateCondition(conditions[0])))
      } 
    }
    setResults(result)
  }, [conditions, setConditions])

  return [setConditions, conditions, results]
}

export default useSearcher
