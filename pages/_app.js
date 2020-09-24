import '../styles/index.css'
import Navbar from '../components/navbar'
import { useRouter } from 'next/router'
import { withApollo } from '../apollo/client'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return ( 
    <div className="min-h-screen h-screen min-w-screen">
      <Navbar></Navbar>
      <div className={`${router.pathname === '/' ? 'p-0 h-full' : 'p-12 mt-20'} min-w-screen`}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default withApollo(MyApp)
