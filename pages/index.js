import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-full bg-blue-600 flex items-center justify-center">
      <Head>
        <title>Save the Date - Asonye/Isles Wedding</title>
        <meta></meta>
      </Head>
      <div className="">
        <img className="w-96" src="/logos/wedding-logo.svg"></img>
      </div>
    </div>
  )
}
