import React from 'react'
import Head from 'next/head'
export default function layout({ title, children }) {
    return (
        <div>
            <Head>
                <title>Title | {title}</title>
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}
