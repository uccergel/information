import Header from './components/Header'
import Footer from './components/Footer'
import RoutesNav from './components/RoutesNav'

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col space-y-4">
        <Header />
        <RoutesNav />
        <Footer />
      </div>
    </div>
  )
}

export default App
