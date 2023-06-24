import { useEffect, useState } from 'react'
import { axiosInstance } from '../utils'

const initialFormValues = {
  name: '',
  surname: '',
  tckn: '',
  birthDate: '',
  bloodGroup: '',
  phoneNumber: '',
  email: '',
  address: '',
  smartialStatusurname: ''
}

export default function CreatePersonPage() {
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues)
  }, [])
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (form.name === '' || form.surname === '') {
      return false
    }
    await axiosInstance.post('/employees', form)
  }

  return (
    <div className="page-container p-20">
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
                  <form
                    className="flex flex-col space-y-4 my-auto rounded-xl"
                    // onSubmit={onSubmit}
                  >
                    <input
                      placeholder="Adınızı Yazınız"
                      type="text"
                      name="name"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="Soyadınızı Yazınız"
                      type="text"
                      name="surname"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="TCKN Yazınız"
                      type="text"
                      name="tckn"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="Doğum Tarihinizi Giriniz"
                      type="text"
                      name="birthdate"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="Kan Grubunuzu Seçiniz"
                      type="text"
                      name="bloodgroup"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="Telefon Numaranızı Yazınız"
                      type="text"
                      name="phonenumber"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="E-Mail Adresinizi Yazınız"
                      type="text"
                      name="email"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="Adresinizi Yazınız"
                      type="text"
                      name="address"
                      onChange={onChangeInput}
                      className="create-input"
                    />
                    <input
                      placeholder="Medeni Durumunuzu Seçiniz"
                      type="text"
                      name="martialstatus"
                      onChange={onChangeInput}
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
        onClick={onSubmit}
        className="bg-[#3C6E71] text-white rounded-md p-1 mr-72"
      >
        Oluştur
      </button>
    </div>
  )
}
