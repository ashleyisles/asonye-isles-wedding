import '../styles/index.css'
import Navbar from '../components/navbar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  console.log(router.pathname)

  return ( 
    <div className="min-h-screen h-screen min-w-screen">
      <Navbar></Navbar>
      <div className={`${router.pathname === '/' ? 'p-0' : 'p-12 mt-20'} min-w-screen h-full`}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
