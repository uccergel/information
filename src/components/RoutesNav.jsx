import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import PersonalPerformancePage from '../pages/performance'
import PersonalInfoPage from '../pages/personal-info'
import SurveyAndTestPage from '../pages/survey-and-test'
import CreatePersonPage from '../pages/personal-info/CreatePersonPage'
import LoginPage from '../pages/LoginPage'
import ReportPage from '../pages/report'

export default function RoutesNav() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/personal-performance"
        element={<PersonalPerformancePage />}
      />
      <Route path="/personal-info" element={<PersonalInfoPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/survey-test" element={<SurveyAndTestPage />} />
      <Route path="/create-person" element={<CreatePersonPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
