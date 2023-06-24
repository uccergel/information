import { NavLink } from 'react-router-dom'
import MainIcon from '../icons/MainIcon'
import UserIcon from '../icons/UserIcon'
import PerformanceIcon from '../icons/PerformanceIcon'
import ReportIcon from '../icons/ReportIcon'
import TestSurveyIcon from '../icons/TestSurveyIcon'
import ExitIcon from '../icons/ExitIcon'

export default function Header() {
  return (
    <nav className="p-3 rounded-s-lg bg-[#284B63]/30 flex-1 max-w-xs flex flex-col ">
      <div className="nav-link">
        <MainIcon />
        <NavLink to="/">Ana Sayfa</NavLink>
      </div>
      <div className="nav-link">
        <UserIcon />
        <NavLink to="/personal-info">Kişisel Bilgiler</NavLink>
      </div>
      <div className="nav-link">
        <PerformanceIcon />
        <NavLink to="/personal-performance">Bireysel Performans</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/create-person">Raporlama</NavLink>
      </div>
      <div className="nav-link">
        <TestSurveyIcon />
        <NavLink to="/survey-test">Test|Anket</NavLink>
      </div>
      <div className="nav-link hover:bg-[#284B63]/40 hover:text-white hover:shadow-xl ">
        <NavLink className="mr-2 rounded-lg p-2 font-bold" to="/login">
          Çıkış
        </NavLink>
      </div>
    </nav>
  )
}
