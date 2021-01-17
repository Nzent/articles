import Layout from '../components/Layout'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Layout title="Home">
        <h1 className="text-green-500 text-semibold text-center text-6xl my-auto h-full w-full">Next.js + Tailwindcss Home😅</h1>
        <Link href='/about'><h1 className="text-green-500 cursor-pointer text-semibold text-center text-2xl my-auto h-full w-full">About</h1></Link>
      </Layout>
    </>
  )
}
