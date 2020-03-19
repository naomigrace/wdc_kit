import { useState, useEffect } from "react"
import sift from "sift"
import events from "../data/events"
import parseEvents from "../utils/parseEvents"

const parsedEvents = parseEvents(events)

const evaluateCondition = condition => {
  if ("date" in condition) {
    return { date: { $gte: new Date(condition.date) } }
  } else if ("venues" in condition) {
    if (condition.venues && condition.venues.find(v => v.value === "all")) {
      return null
    }
    let venuesCondition = []
    condition.venues.forEach(venue => {
      venuesCondition.push({ venue: { $eq: venue.value } })
    })
    return { $or: venuesCondition }
  } else if ("price" in condition) {
    if (condition.price === "all") return
    if (condition.price === 0) return { price: { $eq: 0 } }
    return { price: { $lte: Number(condition.price) } }
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
