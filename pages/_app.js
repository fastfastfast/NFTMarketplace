import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <nav class="flex justify-around py-8 mx-auto bg-black">
        <div class="flex items-center">
          <h3 class="text-3xl font-medium text-blue-500">NFT Marketplace</h3>
        </div>
        <div class="text-blue-500  space-x-8 lg:flex" style={{ marginRight: "1100px",marginTop: "10px"}}>
          <Link href="/">Home</Link>
          <Link href="/my-assets">MyAssets</Link>
          <Link href="/create-item">CreateItem</Link>
          <Link href="/creator-dashboard">Dashboard</Link>
        </div>
        </nav>
          <Component {...pageProps}/>
      </div>
  )
}

export default MyApp
