import React from 'react'
import Head from 'next/head'

export default function RegistryPage () {
  return (
    <div className="">
      <Head>
        <title>Registry - Asonye/Isles Wedding</title>
      </Head>
      <div className="prose prose-xl">
        <h1>Registry <span role="img" aria-label="present">🎁</span></h1>
        <p>Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
      </div>
      <br />
      <div className="grid gap-8 grid-cols-3 grid-flow-row w-full">
        <div className="border border-gray-100 shadow p-8 h-64 rounded-md grid gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center">
            <img src="/target.svg"></img>
          </div>
          <div className="prose prose-lg flex justify-center flex-col">
            <h3 className="">Target</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.target.com">View Registry &rarr;</a>
          </div>
        </div>
        <div className="border border-gray-100 shadow p-8 h-64 rounded-md grid gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center">
            <img src="/crate-barrel.svg"></img>
          </div>
          <div className="prose flex justify-center flex-col">
            <h3 className="">Crate&amp;Barrel</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.crateandbarrel.com/">View Registry &rarr;</a>
          </div>
        </div>
        <div className="border border-gray-100 shadow p-8 h-64 rounded-md grid gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center">
            <img src="/best-buy.svg"></img>
          </div>
          <div className="prose flex justify-center flex-col">
            <h3 className="">Best Buy</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.bestbuy.com">View Registry &rarr;</a>
          </div>
        </div>
        <div className="border border-gray-100 shadow p-8 h-64 rounded-md grid gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center">
            <img src="/ikea.svg"></img>
          </div>
          <div className="prose flex justify-center flex-col">
            <h3 className="">Ikea</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.ikea.com">View Registry &rarr;</a>
          </div>
        </div>
        <div className="border border-gray-100 shadow p-8 h-64 rounded-md grid gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center">
            <img src="/west-elm.svg"></img>
          </div>
          <div className="prose flex justify-center flex-col">
            <h3 className="">West Elm</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.westelm.com">View Registry &rarr;</a>
          </div>
        </div>
        <div className="border border-gray-100 shadow p-8 h-64 rounded-md grid gap-8 grid-flow-col">
          <div className="rounded-md flex items-center justify-center">
            <img src="/apple-pay.svg"></img>
          </div>
          <div className="prose flex justify-center flex-col">
            <h3 className="">Donate Cash</h3>
            <p className="text-base">Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
            <a className="text-base transform ease-in-out duration-200 hover:-translate-y-1" href="https://www.westelm.com">View Registry &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
