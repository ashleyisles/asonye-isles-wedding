import Head from 'next/head'

export default function SaveTheDate() {
  return (
    <div className="grid grid-cols-2 h-full">
      <Head>
        <title>Save the Date - Asonye/Isles Wedding</title>
        <meta></meta>
      </Head>
      <div className="h-full flex flex-col justify-center">
        <div className="prose prose-lg my-10">
          <p className="font-semibold text-gray-800">Saturday April 10th, 2021</p>
          <h1>Save the Date <span role="img" aria-label="champagne">🥂</span></h1>
          <p>Quis ipsum suspendisse ultrices gravida. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Elementum pulvinar etiam non quam. Amet mauris commodo quis imperdiet massa tincidunt. Mattis ullamcorper velit sed ullamcorper. Dictum sit amet justo donec enim diam vulputate ut.</p>
          <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Tincidunt vitae semper quis lectus nulla at volutpat diam. Odio pellentesque diam volutpat commodo sed egestas egestas.</p>
        </div>
        <button className="rounded-md leading-10 bg-blue-600 text-white px-4 text-base w-48 transform ease-in-out duration-100 hover:shadow-lg hover:-translate-y-1">RSVP</button>
      </div>
      <div className="bg-black bg-opacity-25">
        <div className="bg-cover bg-center bg-no-repeat h-full w-full" style={{ backgroundImage: 'url("/photos/jennys-wedding.jpg")' }}>
      </div>
      </div>
    </div>
  )
}
