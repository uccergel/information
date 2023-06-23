import { NavLink } from 'react-router-dom'
import MainIcon from '../icons/MainIcon'

export default function Header() {
  return (
    <nav className="mt-10 ml-3 p-3 rounded-s-lg bg-[#284B63]/30 flex-1 max-w-xs flex flex-col ">
      <div className="flex nav-link">
        <MainIcon />
        <NavLink className="  " to="/">
          Ana Sayfa
        </NavLink>
      </div>
      <NavLink className="nav-link" to="/personal-info">
        Kişisel Bilgiler
      </NavLink>
      <NavLink className="nav-link" to="/personal-performance">
        Bireysel Performans
      </NavLink>
      <NavLink className="nav-link" to="/create-person">
        Personel Oluştur
      </NavLink>
      <NavLink className="nav-link" to="/person-info">
        Aylık Performans
      </NavLink>
      <NavLink className="nav-link" to="/survey-test">
        Test|Anket
      </NavLink>
      <NavLink className="nav-link" to="/create-person-new">
        Personel Oluştur Deneme
      </NavLink>
      <NavLink
        className="mr-2 hover:bg-[#284B63]/40 hover:text-white hover:shadow-xl rounded-lg p-2 font-bold"
        to="/login"
      >
        Çıkış
      </NavLink>
    </nav>
  )
}
