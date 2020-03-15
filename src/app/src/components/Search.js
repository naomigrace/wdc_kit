import React, { useState, useEffect } from "react"
import useSearcher from "../hooks/useSearcher"
import venues from "../data/venues"

const Search = () => {
  const dateTimeNow = new Date().toISOString().split('T')[0]
  const [date, setDate] = useState(dateTimeNow)
  const [venue, setVenue] = useState("all")
  const [price, setPrice] = useState("all")

  const [setConditions, results] = useSearcher()

  useEffect(() => {
    let newConditions = []
    if (date) {
      newConditions.push({ date: date })
    }
    if (venue && venue !== "all") {
      newConditions.push({ venue: venue })
    }
    if (price && price !== "all") {
      newConditions.push({ price: price })
    }
    if(newConditions.length > 0){
      setConditions(newConditions)
    }
  }, [date, venue, price, setConditions])

  return (
    <div>
      <h1>Filters!</h1>
      <input type="datetime-local" onChange={e => setDate(e.target.value)} defaultValue={dateTimeNow}/>
      <select onBlur={e => setVenue(e.target.value)} defaultValue={"all"}>
        <option value={"all"}>all venues</option>
        {Object.keys(venues).map(machine_name => (
          <option value={machine_name}>{venues[machine_name]}</option>
        ))}
      </select>
      <select onBlur={e => setPrice(e.target.value)} defaultValue={"all"}>
        <option value={"all"}>all prices</option>
        <option value={0}>free</option>
        <option value={15}>less than $15</option>
        <option value={30}>less than $30</option>
        <option value={100}>less than $100</option>
      </select>
      <h1>Results</h1>
      {JSON.stringify(results, null, 2)}
    </div>
  )
}

export default Search
