import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import PersonalInfoPage from './pages/PersonalInfoPage'
import HomePage from './pages/HomePage'
import PersonInfoPage from './pages/PersonInfoPage'
import SurveyAndTestPage from './pages/SurveyAndTestPage'
import CreatePersonPage from './pages/CreatePersonPage'
import CreatePersonPageNew from './pages/CreatePersonPageNew'
import LoginPage from './pages/LoginPage'
import PersonalPerformancePage from './pages/performance'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <div className="flex ">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/personal-performance"
              element={<PersonalPerformancePage />}
            />
            <Route path="/personal-info" element={<PersonalInfoPage />} />
            <Route path="/person-info" element={<PersonInfoPage />} />
            <Route path="/survey-test" element={<SurveyAndTestPage />} />
            <Route path="/create-person" element={<CreatePersonPage />} />
            <Route
              path="/create-person-new"
              element={<CreatePersonPageNew />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
