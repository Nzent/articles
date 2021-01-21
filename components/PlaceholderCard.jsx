import React from 'react'
import Image from 'next/image'
export default function ArticleCard() {
    return (
        <div className="bg-white rounded-md shadow-md w-full md:w-10/12 m-auto mb-2">
            {/* Media */}
            <div><div class="rounded-t-md bg-gray-300 h-72 w-full animate-pulse"></div></div>
            {/* Body */}
            <div className="p-4 pb-2">
                {/* Profile */}
                <div className="flex justify-between items-center">
                    <div><div class="rounded-full bg-gray-300 h-12 w-12 animate-pulse"></div></div>
                    <div class="flex-1 space-y-4 py-1 ml-2">
                        <div><div class="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div></div>
                    </div>
                    <div className=" items-center focus:outline-none"><div class="rounded-full bg-gray-300 h-8 w-8animate-pulse"></div></div>
                </div>
                {/* Description */}
                <div>
                    <div class="flex-1 space-y-4 py-1 animate-pulse">
                        <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-300 rounded"></div>
                            <div class="h-4 bg-gray-300 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
                {/* Reaction */}
                <div className="border-b border-gray-500 border-opacity-50 m-4"></div>
                <div>
                    <div className="flex flex-row justify-between items-center text-gray-500">
                        <div><button className="focus:outline-none hover:text-blue-400 transition duration-500"><div><div class="rounded-full bg-gray-300 h-10 w-10 animate-pulse"></div></div></button></div>
                        <div><button className="focus:outline-none hover:text-blue-400 transition duration-500"><div><div class="rounded-full bg-gray-300 h-10 w-10 animate-pulse"></div></div></button></div>
                        <div><button className="focus:outline-none hover:text-blue-400 transition duration-500"><div><div class="rounded-full bg-gray-300 h-10 w-10 animate-pulse"></div></div></button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
