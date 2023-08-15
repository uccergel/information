import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="justify-between flex mt-6 mr-4 ml-4 bg-[#3C6E71]/30 p-4 rounded-xl">
      <div className="space-x-4">
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/personal-info">Kişisel Bilgiler</NavLink>
        <NavLink to="/personal-performance">Bireysel Performans</NavLink>
        <NavLink to="/report">Raporlama</NavLink>
        <NavLink to="/survey-test">Test|Anket</NavLink>
      </div>
      <div>
        <NavLink className="flex mr-2 rounded-lg font-bold" to="/login">
          Çıkış
        </NavLink>
      </div>
    </nav>
  )
}
