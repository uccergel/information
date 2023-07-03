import { NavLink } from 'react-router-dom'
import MainIcon from '../icons/MainIcon'
import UserIcon from '../icons/UserIcon'
import HomeIcon from '../icons/HomeIcon'
import PerformanceIcon from '../icons/PerformanceIcon'
import ReportIcon from '../icons/ReportIcon'
import TestSurveyIcon from '../icons/TestSurveyIcon'
import ExitIcon from '../icons/ExitIcon'

export default function Header() {
  return (
    <nav className="p-3 bg-[#284B63]/30 flex flex-col">
      <div className="p-2 mt-10">
        <NavLink to="/">
          <MainIcon />
        </NavLink>
      </div>
      <div className="nav-link mt-5">
        <HomeIcon />
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
        <ReportIcon />
        <NavLink to="/report">Raporlama</NavLink>
      </div>
      <div className="nav-link">
        <TestSurveyIcon />
        <NavLink to="/survey-test">Test|Anket</NavLink>
      </div>
      <div className="nav-link hover:bg-[#284B63]/40 hover:text-white hover:shadow-xl ">
        <NavLink className="flex mr-2 rounded-lg p-2 font-bold" to="/login">
          <ExitIcon />
          Çıkış
        </NavLink>
      </div>
    </nav>
  )
}
