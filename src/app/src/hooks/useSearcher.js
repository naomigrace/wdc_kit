import { useState, useEffect } from "react"
import sift from "sift"
import events from "../data/events"

const parseEvents = events => {
  let newEvents = events
  newEvents.forEach(event => {
    event.date = new Date(event.date)
  })
  return newEvents
}

const parsedEvents = parseEvents(events)

const evaluateCondition = condition => {
  if ("date" in condition) {
    return { date: { $gte: new Date(condition.date) } }
  } else if ("venue" in condition) {
    return { venue: { $eq: condition.venue } }
  }
}

const evaluateConditions = conditions => {
  let allConditions = []
  conditions.forEach(condition => {
    let c = evaluateCondition(condition)
    allConditions.push(c)
  })
  console.log(allConditions)
  return allConditions
}

const useSearcher = defaultConditions => {
  let [conditions, setConditions] = useState(defaultConditions)
  let [results, setResults] = useState()

  useEffect(() => {
    let result
    if (conditions && conditions.length > 1) {
      // result = parsedEvents.filter(sift(evaluateCondition(conditions[0])))
      result = events.filter(sift({ $and: evaluateConditions(conditions) }))
    } else if (conditions && conditions.length === 1) {
      result = parsedEvents.filter(sift(evaluateCondition(conditions[0])))
    } else {
      result = null
    }
    setResults(result)
  }, [conditions, setConditions])

  return [setConditions, results]
}

export default useSearcher
