import React, { useState, useEffect } from "react"
import useSearcher from "../hooks/useSearcher"
import venues from "../data/venues"

const Search = () => {
  const [date, setDate] = useState()
  const [venue, setVenue] = useState("_930")
  const [price, setPrice] = useState("0")

  const [setConditions, results] = useSearcher()

  useEffect(() => {
    let newConditions = []
    if (date) {
      newConditions.push({ date: date })
    }
    if (venue) {
      newConditions.push({ venue: venue })
    }
    if (price) {
      newConditions.push({ price: price })
    }

    console.log(newConditions)
    setConditions(newConditions)
  }, [date, venue, price, setConditions])

  return (
    <div>
      <h1>Filters!</h1>
      <input type="datetime-local" onChange={e => setDate(e.target.value)} />
      <select onBlur={e => setVenue(e.target.value)}>
        {Object.keys(venues).map(machine_name => (
          <option value={machine_name}>{venues[machine_name]}</option>
        ))}
      </select>
      <select onBlur={e => setPrice(e.target.value)}>
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
