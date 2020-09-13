import React from 'react'
import Head from 'next/head'

export default function RsvpPage () {
  return (
    <div className="h-full prose prose-xl">
      <Head>
        <title>Save the Date - Asonye/Isles Wedding</title>
        <meta></meta>
      </Head>
      <h1>RSVP <span role="img" aria-label="admit one ticket">🎟</span></h1>
      <p>Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
      <div className="grid grid-flow-row gap-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="font-semibold text-sm mb-1">First Name</label>
            <input placeholder="Jane" className="rounded-md border leading-10 border-gray-300 focus:outline-none focus:shadow-outline-blue px-4 text-base"></input>
          </div>  
          <div className="flex flex-col">
            <label className="font-semibold text-sm mb-1">Last Name</label>
            <input placeholder="Doe" className="rounded-md border leading-10 border-gray-300 focus:outline-none focus:shadow-outline-blue px-4 text-base"></input>
          </div>  
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Email</label>
          <input placeholder="jane@doe.com" className="rounded-md border leading-10 border-gray-300 focus:outline-none focus:shadow-outline-blue px-4 text-base"></input>
        </div> 
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Will you be bringing a plus one?</label>
          <div role="group">
            <div>
              <input value="yes" id="plusOne-opt-yes" name="plusOne" className="focus:outline-none checked:bg-white checked:border-4 checked:border-blue-600 focus:shadow-outline cursor-pointer h-4 w-4 bg-white border border-gray-400 text-blue-600 rounded-full flex-shrink-0 inline-block align-middle select-none appearance-none" type="radio"></input>
              <label for="plusOne-opt-yes" className="ml-3">
                <span className="text-base font-normal text-gray-700">Yes</span>
              </label>
            </div>
            <div>
              <input value="no" id="plusOne-opt-no" name="plusOne" className="focus:outline-none checked:bg-white checked:border-4 checked:border-blue-600 focus:shadow-outline cursor-pointer h-4 w-4 bg-white border border-gray-400 text-blue-600 rounded-full flex-shrink-0 inline-block align-middle select-none appearance-none" type="radio"></input>
              <label for="plusOne-opt-no" className="ml-3">
                <span className="text-base font-normal text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">What&apos;s their name?</label>
          <input placeholder="Jane Doe" className="rounded-md border leading-10 border-gray-300 focus:outline-none focus:shadow-outline-blue px-4 text-base"></input>
        </div>
        <div>
          <label className="font-semibold text-sm mb-1">Do you have any dietary restrictions?</label>
          <div role="group">
            <div>
              <input value="yes" id="opt-nuts" name="dietary" className="focus:outline-none checked:bg-white checked:border-4 checked:border-blue-600 focus:shadow-outline cursor-pointer h-4 w-4 bg-white border border-gray-400 text-blue-600 rounded-full flex-shrink-0 inline-block align-middle select-none appearance-none" type="radio"></input>
              <label for="opt-nuts" className="ml-3">
                <span className="text-base font-normal text-gray-700">Nuts (Peanuts, Tree nuts, etc)</span>
              </label>
            </div>
            <div>
              <input value="no" id="opt-vegetarian" name="dietary" className="focus:outline-none checked:bg-white checked:border-4 checked:border-blue-600 focus:shadow-outline cursor-pointer h-4 w-4 bg-white border border-gray-400 text-blue-600 rounded-full flex-shrink-0 inline-block align-middle select-none appearance-none" type="radio"></input>
              <label for="opt-vegetarian" className="ml-3">
                <span className="text-base font-normal text-gray-700">Vegetarian</span>
              </label>
            </div>
            <div>
              <input value="no" id="opt-vegan" name="dietary" className="focus:outline-none checked:bg-white checked:border-4 checked:border-blue-600 focus:shadow-outline cursor-pointer h-4 w-4 bg-white border border-gray-400 text-blue-600 rounded-full flex-shrink-0 inline-block align-middle select-none appearance-none" type="radio"></input>
              <label for="opt-vegan" className="ml-3">
                <span className="text-base font-normal text-gray-700">Vegan</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <br />
      <button className="rounded-md leading-10 bg-blue-600 text-white px-4 text-base w-48 transform ease-in-out duration-100 hover:shadow-lg hover:-translate-y-1">RSVP</button>
    </div>
  )
}
