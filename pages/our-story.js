import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import moment from 'moment'
require('moment-precise-range-plugin')

export default function OurStoryPage () {
  const [timeSince, setTimeSince] = useState('')

  useEffect(() => {
    setInterval(() => {
      setTimeSince(moment('2016-09-16').preciseDiff(moment(), true))
    }, 1000)
  }, [timeSince])


  const prettifyTimeSince = () => {
    if (timeSince.years) {
      return (
        <span className="text-black flex items-baseline">
          <div className="flex flex-col items-center">
            <span className="text-black font-black text-5xl leading-8">{ `${timeSince.years < 10 ? `0${timeSince.years}` : timeSince.years}` }</span>
            <span className="mt-1 uppercase tracking-wider text-xs font-extrabold">Years</span>
          </div>
          <span className="text-black font-black text-5xl mx-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-black font-black text-5xl leading-8">{ `${timeSince.months < 10 ? `0${timeSince.months}` : timeSince.months}` }</span>
            <span className="mt-1 uppercase tracking-wider text-xs font-extrabold">Months</span>
          </div>
          <span className="text-black font-black text-5xl mx-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-black font-black text-5xl leading-8">{ `${timeSince.days < 10 ? `0${timeSince.days}` : timeSince.days}` }</span>
            <span className="mt-1 uppercase tracking-wider text-xs font-extrabold">Days</span>
          </div>
          <span className="text-black font-black text-5xl mx-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-black font-black text-5xl leading-8">{ `${timeSince.hours < 10 ? `0${timeSince.hours}` : timeSince.hours}` }</span>
            <span className="mt-1 uppercase tracking-wider text-xs font-extrabold">Hours</span>
          </div>
          <span className="text-black font-black text-5xl mx-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-black font-black text-5xl leading-8">{ `${timeSince.seconds < 10 ? `0${timeSince.seconds}` : timeSince.seconds}` }</span>
            <span className="mt-1 uppercase tracking-wider text-xs font-extrabold">Seconds</span>
          </div>
        </span>
      )
    }
    
  }

  return (
    <div className="h-full prose prose-xl">
      <Head>
        <title>Our Story - Asonye/Isles Wedding</title>
      </Head>
      <h1>Our Story <span role="img" aria-label="groom dark skin">🤵🏾</span><span role="img" aria-label="bridge dark skin">👰🏾</span></h1>
      <h3>Where did we meet?</h3>
      <p><span role="img" className="text-4xl" aria-label="bride dark skin">👰🏾</span>: At SMU in 2016! It was my senior year, Enyi&apos;s sophomore year.</p>
      <h3>How did he propose? <span role="img" aria-label="ring">💍</span></h3>
      <p><span className="text-4xl" role="img" aria-label="groom dark skin">🤵🏾</span></p>
      <h3>How long have y&apos;ll been together?</h3>
      { prettifyTimeSince() }
    </div>
  )
}
