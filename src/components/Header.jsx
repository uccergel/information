import { NavLink, Route, Routes } from 'react-router-dom'
import PersonListPage from '../pages/PersonListPage'
import HomePage from '../pages/HomePage'
import PersonInfoPage from '../pages/PersonInfoPage'
import SurveyAndTestPage from '../pages/SurveyAndTestPage'
import PerformancePage from '../pages/PerformancePage'
import CreatePersonPage from '../pages/CreatePersonPage'
import CreatePersonPageNew from '../pages/CreatePersonPageNew'
import LoginPage from '../pages/LoginPage'

export default function Header() {
  return (
    <div>
      <div className="p-3 flex justify-between rounded-lg bg-[#284B63]/30 shadow-2xl h-[70px]">
        <nav className="flex justify-center space-x-5">
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/"
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/performance"
          >
            Performans
          </NavLink>
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/person-list"
          >
            Personel Listesi
          </NavLink>
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/create-person"
          >
            Personel Oluştur
          </NavLink>
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/person-info"
          >
            Aylık Performans
          </NavLink>
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/survey-test"
          >
            Test|Anket
          </NavLink>
          <NavLink
            className="my-auto hover:bg-[#284B63]/40 hover:shadow-xl rounded-lg p-2 font-bold"
            to="/create-person-new"
          >
            Personel Oluştur Deneme
          </NavLink>
        </nav>
        <NavLink
          className="mr-2 hover:bg-[#284B63]/40 hover:text-white hover:shadow-xl rounded-lg p-2 font-bold"
          to="/login"
        >
          Giriş
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/person-info" element={<PersonInfoPage />} />
        <Route path="/person-list" element={<PersonListPage />} />
        <Route path="/survey-test" element={<SurveyAndTestPage />} />
        <Route path="/create-person" element={<CreatePersonPage />} />
        <Route path="/create-person-new" element={<CreatePersonPageNew />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}
