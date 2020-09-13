import React from 'react'
import Head from 'next/head'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

export default function DatesPage () {
  return (
    <div className="h-full max-w-full prose prose-xl">
      <Head>
        <title>Accommodations - Asonye/Isles Wedding</title>
        {/* <script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"></script> */}
      </Head>
      <h1>Accommodations <span role="img" aria-label="hotel">🏨</span></h1>
      <p>Say you're with the Asonye/Isles wedding for the hotel&apos;s group rate!</p>
      <div className="grid gap-8 grid-flow-col">
        <div className="border border-gray-100 shadow p-8 rounded-md grid grid-cols-3 gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center col-span-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.405727833606!2d-97.09841888435989!3d33.1772250707774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcb33ad7dccfd%3A0x393c5155af20793f!2s3180%20S%20Interstate%2035%2C%20Denton%2C%20TX%2076210!5e0!3m2!1sen!2sus!4v1599983832206!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div className="prose prose-lg flex justify-center flex-col col-span-1">
            <h3 className="">Holiday Inn Express &amp; Suites Denton South</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.target.com">Go to Website &rarr;</a>
          </div>
        </div>
        <div className="border border-gray-100 shadow p-8 rounded-md grid grid-cols-3 gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center col-span-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.405727833606!2d-97.09841888435989!3d33.1772250707774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89d75c10c8f0c2a3!2sHomewood%20Suites%20by%20Hilton%20Denton!5e0!3m2!1sen!2sus!4v1599984354169!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div className="prose prose-lg flex justify-center flex-col col-span-1">
            <h3 className="">Homewood Suites by Hilton Denton</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.target.com">Go to Website &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
