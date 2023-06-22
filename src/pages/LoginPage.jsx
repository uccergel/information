import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = () => {}
  return (
    <div className="login_card">
      <h3 className="text-2xl font-semibold text-[#284B63] text-center mb-3">
        Giriş Yap
      </h3>
      <input
        type="text"
        placeholder="Kullanıcı Adınız"
        className="bg-[#D9D9D9] mb-3"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="Parola"
        className="bg-[#D9D9D9] mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.password)}
      />
      <button
        onClick={onSubmit}
        className="rounded-md bg-opacity-100 bg-[#284B63]/70 text-white/60 p-2"
      >
        Giriş Yap
      </button>
      <span>
        Üye Olmak İstiyorum,
        <NavLink to="/register" className="text-red-400 hover:text-black">
          Üye Ol!
        </NavLink>
      </span>
    </div>
  )
}
