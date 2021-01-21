import React from 'react'

export default function ActionCard() {
    return (
        <div className="sticky top-2">
            <figure className="bg-white rounded-md p-4 shadow-md">
                <h1 className="text-xl lg:text-center font-semibold text-blue-400">Actions</h1>
                {/* List */}
                <ul className="space-y-4 m-auto ">
                    <Limenu icon='ri-user-line' name='Profile' />
                    <Limenu icon='ri-article-line' name='My articles' />
                    <Limenu icon='ri-shirt-line' name='Merchs' />
                    <li><button className="bg-blue-400 p-2 rounded-md text-white lg:w-full shadow-md hover:bg-white hover:border-blue-500 hover:shadow-none hover:text-blue-500 border transition  duration-500 flex justify-center items-center"><i className="ri-file-add-line ri-lg"></i> <span className="font-semibold hidden lg:block">Make article</span></button></li>
                </ul>
            </figure>
        </div>
    )
}

function Limenu({ icon, name }) {
    return (
        <li className=" lg:border lg:border-blue-400 p-2 rounded-md uppercase text-blue-400  hover:shadow-md hover:text-white hover:bg-blue-400 cursor-pointer transition  duration-500 flex  items-center text-2xl lg:text-lg"><i className={`${icon} ri-lg`}></i><span className='font-semibold hidden lg:block'>{name}</span></li>
    )
}