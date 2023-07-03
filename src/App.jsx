import Header from './components/Header'
import Footer from './components/Footer'
import RoutesNav from './components/RoutesNav'

function App() {
  return (
    <div className="max-w-full">
      <div className="flex">
        <div className="">
          <Header />
        </div>
        <div>
          <RoutesNav />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
