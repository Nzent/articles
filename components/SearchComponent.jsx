import axios from 'axios'
import React, { useEffect } from 'react'

export default function SearchComponent({ inputTxt}) {
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/photos",
        })
    }, [inputTxt, pageNo])

    return (
        <div>
            <div className="bg-white p-1 shadow-md rounded-md flex flex-row items-center">
                <input onChange={inputTxt} className="w-full border text-blue-400 border-blue-400 p-2 font-semibold rounded-md focus:outline-none" type="text" value={inputTxt} />
                <button><i className    ="ri-search-2-line text-3xl text-blue-400 ml-2 mr-2 m-auto"></i></button>
            </div>
        </div>
    )
}
