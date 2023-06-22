import axios from 'axios'
import { useEffect, useState } from 'react'

const url = 'http://localhost:3000/employees'

export default function CreatePersonPage() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [tckn, setTckn] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [martialStatus, setMartialStatus] = useState('')

  const onSave = () => {
    axios.get(url, ...data)
  }

  return (
    <div className="page-container h-screen p-20 mt-10">
      <div className="text-xl font-bold mb-5 flex space-x-5">
        <h1>Yeni Personel Ekleme Sayfası</h1>
      </div>
      <div>
        <div className="mb-5 space-x-2">
          <div>
            {/* <!-- Kişisel Bilgiler Kısmı --> */}
            <div>
              <div>
                <h1 className="title-heading">Kişisel Bilgiler</h1>
                <div className="flex mb-4">
                  <div className="flex flex-col space-y-4 my-auto">
                    <p className="font-semibold">Adı:</p>
                    <p className="font-semibold">Soyadı:</p>
                    <p className="font-semibold">TC Kimlik Numarası:</p>
                    <p className="font-semibold">Doğum Tarihi:</p>
                    <p className="font-semibold">Kan Grubu:</p>
                    <p className="font-semibold">Telefon Numarası:</p>
                    <p className="font-semibold">E-Posta Adresi:</p>
                    <p className="font-semibold">Adresi:</p>
                    <p className="font-semibold">Medeni Durumu:</p>
                  </div>
                  <form className="flex flex-col space-y-4 my-auto rounded-xl">
                    <input
                      placeholder="Adınızı Yazınız"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="Soyadınızı Yazınız"
                      type="text"
                      name="surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="TCKN Yazınız"
                      type="text"
                      name="tckn"
                      value={tckn}
                      onChange={(e) => setTckn(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="Doğum Tarihinizi Giriniz"
                      type="text"
                      name="birthdate"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="Kan Grubunuzu Seçiniz"
                      type="text"
                      name="bloodgroup"
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="Telefon Numaranızı Yazınız"
                      type="text"
                      name="phonenumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="E-Mail Adresinizi Yazınız"
                      type="text"
                      name="emaik"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="Adresinizi Yazınız"
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="create-input"
                    />
                    <input
                      placeholder="Medeni Durumunuzu Seçiniz"
                      type="text"
                      name="martialstatus"
                      value={martialStatus}
                      onChange={(e) => setMartialStatus(e.target.value)}
                      className="create-input"
                    />
                  </form>
                </div>
              </div>
              <hr className="border-black mb-5" />
            </div>
            {/* <!-- Eğitim Bilgileri --> */}
          </div>
        </div>
      </div>
      <button
        onClick={onSave}
        className="bg-[#3C6E71] text-white rounded-md p-1 mr-72"
        disabled={!name || !surname}
      >
        Oluştur
      </button>
    </div>
  )
}
