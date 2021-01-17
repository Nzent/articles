import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function about() {
    return (
        <div>
            <Layout title="About">
                <h1 className="text-green-500 text-semibold text-center text-6xl my-auto h-full w-full">Next.js + Tailwindcss About🙂</h1>
                <Link href='/'><h1 className="text-green-500 cursor-pointer text-semibold text-center text-2xl my-auto h-full w-full">Home</h1></Link>
            </Layout>
        </div>
    )
}
