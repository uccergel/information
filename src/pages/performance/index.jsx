import { NavLink, Route, Routes } from 'react-router-dom'
import PersonInfoPage from './PersonInfoPage'

export default function PersonalPerformancePage() {
  return (
    <div className="page-container mt-10 flex space-x-5 ">
      <div className="flex flex-col w-screen">
        <div className="flex justify-content space-x-5 mt-2 mb-3 p-4 mx-auto">
          <NavLink to="person-info" className="performance-page-content">
            Kişisel Bilgiler
          </NavLink>
          <NavLink
            to="performance/monthly-performance"
            className="performance-page-content"
          >
            Aylık Performans
          </NavLink>
          <NavLink to="/performance/shift" className="performance-page-content">
            Vardiya
          </NavLink>
          <NavLink
            to="performance/survey-and-test"
            className="performance-page-content"
          >
            Test ve Sınavları
          </NavLink>
          <NavLink
            to="performance/manager-opinion"
            className="performance-page-content"
          >
            Yönetici Görüşü
          </NavLink>
        </div>
        <div>
          <Routes>
            <Route
              path="performance/person-info"
              element={<PersonInfoPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}
