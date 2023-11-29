import Header from './component/Header'
import HomePage from './component/HomePage'
import Footer from './component/Footer'


export default function Home() {
  return (
    <div className='md:mx-11 bg-gray-50'>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}
