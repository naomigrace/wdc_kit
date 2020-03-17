import { useState, useEffect } from "react"
import sift from "sift"
import events from "../data/events"
import parseEvents from "../utils/parseEvents"

const parsedEvents = parseEvents(events)

const evaluateCondition = condition => {
  if ("date" in condition) {
    return { date: { $gte: new Date(condition.date) } }
  } else if ("venue" in condition) {
    return { venue: { $eq: condition.venue } }
  } else if ("price" in condition) {
    if (condition.price === "all") return
    return { price: { $lte: Number(condition.price) } }
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
      result = events.filter(sift({ $and: evaluateConditions(conditions) }))
    } else if (conditions && conditions.length === 1) {
      result = parsedEvents.filter(sift(evaluateCondition(conditions[0])))
    } else {
      result = parsedEvents
    }
    console.log(results)
    setResults(result)
  }, [conditions, setConditions])

  return [setConditions, conditions, results]
}

export default useSearcher
