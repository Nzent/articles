import React from 'react'
import Head from 'next/head'
export default function layout({ title, children }) {
    return (
        <div>
            <Head>
                <title>NArticles | {title}</title>
            </Head>
            <main className="mt-2 w-full 2xl:w-8/12 m-auto">
                {children}
            </main>
        </div>
    )
}
