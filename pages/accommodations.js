import React from 'react'
import Head from 'next/head'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

export default function DatesPage () {
  return (
    <div className="h-full prose prose-xl">
      <Head>
        <title>Accommodations - Asonye/Isles Wedding</title>
      </Head>
      <h1>Accommodations <span role="img" aria-label="hotel">🏨</span></h1>
      <p>Say you're with the Asonye/Isles wedding for the hotel&apos;s group rate!</p>
      <div>
        <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/denton/dfwdn/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-DFWDN">Holiday Inn Express &amp; Suites Denton South</a>
      </div>
    </div>
  )
}
