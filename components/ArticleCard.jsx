import React from 'react'
import Image from 'next/image'
export default function ArticleCard({ articleImage, articleAvatar, articleUserName, articleDate, articleDescription }) {
    return (
        <div className="bg-white rounded-md shadow-md w-full md:w-10/12 m-auto mb-2">
            {/* Media */}
            <div><Image className='rounded-t-md w-full' width={500} height={500} layout="responsive" src={articleImage} alt="articleImg" /></div>
            {/* Body */}
            <div className="p-4 pb-2">
                {/* Profile */}
                <div className="flex justify-between items-center">
                    <div><Image className="rounded-full border-2 border-gray-200" width={50} height={50} src={articleAvatar} alt="avatar" /></div>
                    <div><span className='font-bold text-gray-600 italic'>{articleUserName}</span> <span className="font-bold italic text-gray-500">{articleDate}</span></div>
                    <div className=" items-center focus:outline-none"><button className=' p-2 rounded-md font-semibold text-gray-600'><i className="ri-menu-3-line"></i></button></div>
                </div>
                {/* Description */}
                <div>
                    <p className="text-gray-600 font-semibold">
                        {articleDescription ? articleDescription : <div></div>}
                    </p>
                    <div>
                        <span className="text-gray-400 italic text-sm text-center">from </span> <span className="text-gray-500 italic text-sm"><a className href="https://www.unsplash.com"><i class="ri-unsplash-fill"></i> Unsplash</a></span>
                    </div>
                </div>
                {/* Reaction */}
                <div className="border-b border-gray-500 border-opacity-50 m-4"></div>
                <div>
                    <div className="flex flex-row justify-between items-center text-gray-500">
                        <div><button className="focus:outline-none hover:text-blue-400 transition duration-500"><i className="ri-heart-line ri-xl bg-gray-200 p-1 rounded-full"></i></button></div>
                        <div><button className="focus:outline-none hover:text-blue-400 transition duration-500"><i className="ri-message-3-line ri-xl bg-gray-200 p-1 rounded-full"></i></button></div>
                        <div><button className="focus:outline-none hover:text-blue-400 transition duration-500"><i className="ri-share-line ri-xl bg-gray-200 p-1 rounded-full"></i></button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
