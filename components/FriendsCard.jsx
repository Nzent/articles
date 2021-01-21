import Image from 'next/image'
import React from 'react'

export default function FriendsCard() {
    return (
        <div className="sticky top-2">
            <figure className="bg-white rounded-md p-4 shadow-md">
                <h1 className="text-xl text-center font-semibold text-blue-400">Friends</h1>
                <ul className="space-y-2">
                    <li className='cursor-pointer flex flex-row items-center space-x-2 border-gray-300 pt-2 pb-2 border-b'>
                        <img className='rounded-full w-10 h-10 md:w-14 md:h-14 border-2 border-gray-200' src='/images/avatar.jpg' alt="" />
                        <span className="text-gray-600 font-semibold truncate overflow-hidden">Nirvan zentinal</span>
                    </li>
                </ul>
            </figure>
        </div>
    )
}
