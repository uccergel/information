import { NavLink } from 'react-router-dom'

export default function PerformancePage() {
  return (
    <div className="page-container flex rounded-xl space-x-5 mt-10">
      <div className="flex flex-col w-screen">
        <div className="flex justify-content space-x-5 mt-2 mb-3 p-4 mx-auto">
          <NavLink
            to="performance/person-info"
            className="performance-page-content"
          >
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
            Test|Sınav
          </NavLink>
          <NavLink
            to="performance/manager-opinion"
            className="performance-page-content"
          >
            Yönetici Görüşü
          </NavLink>
        </div>
      </div>
    </div>
  )
}
