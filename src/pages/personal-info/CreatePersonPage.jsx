import { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils'

export default function CreatePersonPage() {
  const [bloodGroups, setBloodGroups] = useState([])
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [tckn, setTckn] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [martialStatus, setMartialStatus] = useState([])
  const [education, setEducation] = useState([])
  const [educationId, setEducationId] = useState('')
  const [martialStatusId, setMartialStatusId] = useState('')
  const [bloodGroupId, setBloodGroupId] = useState('')

  // useEffect(() => {
  //   const eslestir = () => {
  //     axiosInstance
  //       .get('bloodGroup')
  //       .then((res) => setBloodGroup(res.data))
  //       .catch((err) => console.log(err))
  //   }
  //   bloodGroup?.find((bloodGroup) => bloodGroup?.id === employees?.bloodGroupId)
  //     ?.name
  // })

  //ChatGPT fonksiyonu
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance('/bloodGroup')
  //       setData(response.data)
  //     } catch (err) {
  //       console.log('Veri Bulunamadı', err)
  //     }
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      await axiosInstance
        .get('bloodGroup')
        .then((response) =>
          setBloodGroups(
            response.data.map((bloodGroups) => {
              return {
                id: bloodGroups.id,
                name: bloodGroups.name
              }
            })
          )
        )
        .catch((err) => console.log('Veri Bulunamadı', err))
      await axiosInstance
        .get('martialStatus')
        .then((response) =>
          setMartialStatus(
            response.data.map((martialStatus) => {
              return {
                id: martialStatus.id,
                name: martialStatus.name
              }
            })
          )
        )
        .catch((err) => console.log('veri bulunamadı...', err))
      await axiosInstance
        .get('education')
        .then((response) =>
          setEducation(
            response.data.map((education) => {
              return {
                id: education.id,
                name: education.name
              }
            })
          )
        )
        .catch((err) => console.log('veri bulunamadı', err))
    }
    fetchData()
  }, [])
  const onSave = async () => {
    const data = {
      name,
      surname,
      tckn,
      birthDate,
      bloodGroupId,
      phoneNumber,
      email,
      address,
      martialStatusId,
      education
    }
    await axiosInstance.post('employees', data).catch((err) => console.log(err))
  }
  return (
    <div className="page-container p-20">
      <div className="text-xl font-bold mb-5 flex space-x-5">
        <h2>Yeni Personel Ekleme Sayfası</h2>
      </div>
      <div>
        <div className="mb-5 space-x-2">
          <div>
            {/* <!-- Kişisel Bilgiler Kısmı --> */}
            <div>
              <h2 className="text-lg mb-5 font-semibold">Kişisel Bilgiler</h2>
              <form className="flex mb-4 flex-col space-y-4 my-auto rounded-xl text-left w-auto">
                {/* Adı */}
                <div className="flex justify-between">
                  <p className="font-semibold">Adı:</p>
                  <input
                    placeholder="Adınızı Yazınız"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="create-input"
                  />
                </div>
                {/* Soyadı */}
                <div className="flex justify-between">
                  <span className="font-semibold">Soyadı:</span>
                  <input
                    placeholder="Soyadınızı Yazınız"
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="create-input"
                  />
                </div>
                {/* TCKN */}
                <div className="flex justify-between">
                  <span className="font-semibold">TC Kimlik Numarası:</span>
                  <input
                    placeholder="TCKN Yazınız"
                    type="number"
                    name="tckn"
                    value={tckn}
                    onChange={(e) => setTckn(e.target.value)}
                    className="create-input"
                  />
                </div>
                {/* Doğum Tarihi */}
                <div className="flex justify-between">
                  <p className="font-semibold">Doğum Tarihi:</p>
                  <input
                    type="date"
                    name="birthdate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="create-input text-slate-200"
                  />
                </div>
                {/* Kan Grubu */}
                <div className="flex justify-between">
                  <p className="font-semibold">Kan Grubu:</p>
                  <select
                    className="create-input text-slate-200"
                    value={bloodGroupId}
                    onChange={(e) => setBloodGroupId(e.target.value)}
                  >
                    <option>Seçiniz</option>
                    {bloodGroups?.map((bloodGroup) => (
                      <option key={bloodGroup.id} value={bloodGroup.id}>
                        {bloodGroup.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Telefon Numarası */}
                <div className="flex justify-between">
                  <p className="font-semibold">Telefon Numarası:</p>
                  <input
                    placeholder="Telefon Numaranızı Yazınız"
                    type="number"
                    name="phonenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="create-input"
                  />
                </div>
                {/* E Posta Adresi */}
                <div className="flex justify-between">
                  <p className="font-semibold">E-Posta Adresi:</p>
                  <input
                    placeholder="E-Posta Adresinizi Yazınız"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="create-input"
                  />
                </div>
                {/* Oturduğu Adres */}
                <div className="flex justify-between">
                  <p className="font-semibold">Adresi:</p>
                  <input
                    placeholder="Adresinizi Yazınız"
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="create-input"
                  />
                </div>
                {/* Medeni Durumu */}
                <div className="flex justify-between">
                  <p className="font-medium">Medeni Durumu:</p>
                  <select
                    value={martialStatusId}
                    onChange={(e) => setMartialStatusId(e.target.value)}
                    className="create-input text-slate-200"
                  >
                    <option>Seçiniz</option>
                    {martialStatus?.map((martialStatus) => (
                      <option key={martialStatus.id} value={martialStatus.id}>
                        {martialStatus.name}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
            <hr className="border-black mt-5 mb-5" />
            {/* <!-- Eğitim Bilgileri --> */}
            <div>
              <h2 className="text-lg mb-5 font-semibold">Diğer Bilgiler</h2>
              <form className="flex mb-4 flex-col space-y-4 my-auto rounded-xl text-left w-auto">
                {/* Eitim Durumu */}
                <div className="flex justify-between">
                  <h2 className="font-medium">Eğitim Durumu:</h2>
                  <select
                    value={educationId}
                    onChange={(e) => setEducationId(e.target.value)}
                    className="create-input text-slate-200"
                  >
                    <option>Seçiniz</option>
                    {education?.map((education) => (
                      <option key={education.id} value={education.id}>
                        {education.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2 className="font-medium">Görsel Ekleme: </h2>
                  <input type="image" src="" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onSave()}
        className="bg-[#3C6E71] text-white rounded-md p-1 mr-72"
        disabled={!name || !surname}
      >
        Oluştur
      </button>
    </div>
  )
}
