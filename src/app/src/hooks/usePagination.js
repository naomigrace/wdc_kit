import { useState, useEffect } from "react";

const getData = (currentPage, data, itemsPerPage) => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage
    console.log(data)
    console.log(begin)
    console.log(end)
    console.log(data.slice(begin, end))
    return data.slice(begin, end)
}

const usePagination = ({ data, itemsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [currentData, setCurrentData] = useState(getData(currentPage, data, itemsPerPage))
    const maxPage = Math.ceil(data.length / itemsPerPage)

    useEffect(() => {
        setCurrentData(getData(currentPage, data, itemsPerPage))
    }, [currentPage, data, itemsPerPage])

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
    }

    const back = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
    }

    const jump = (newPage) => {
        if(newPage < 1){ setCurrentPage(1) }
        if(newPage > maxPage) { setCurrentPage(maxPage)}
        setCurrentPage(newPage)
    }

    const getOneThroughOfLabel = () => {
        let ofTotal = data.length
        let start = itemsPerPage * ( currentPage - 1 ) + 1
        let end = ( start - 1) + itemsPerPage
        if(end > ofTotal) {
            end = ofTotal
        }

        return (`${start} - ${end} of ${ofTotal} events`)
    }

    return [ next, back, jump, currentData, currentPage, maxPage, getOneThroughOfLabel ]
}

export default usePagination