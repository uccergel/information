import { useEffect, useState } from 'react'

export default function CreatePersonPage() {
  const [name, setName] = useState()
  const [surname, setSurname] = useState()

  const onSave = (data) => {
    const formData = new FormData()
    formData.append('employeesId', data.id)
    formData.append('name', data.name)
    formData.append('surname', data.surname)

    fetch('http://localhost:3000/employees', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  // useEffect(() => {
  //   onSave({
  //     id: 10,
  //     name: 'Emrullah',
  //     surname: 'Yanık'
  //   })
  // }, [])
  const submitHandle = () => {
    console.log('Submit handle edildi.')
  }
  return (
    <>
      <form className="mt-5" onSubmit={submitHandle}>
        <input
          className="rounded-lg mb-3 bg-slate-500 text-yellow-100"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="rounded-lg mb-3 bg-slate-500 text-yellow-100"
          type="text"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <button
          className="border border-zinc-500 rounded-lg p-2 bg-zinc-500 text-yellow-200"
          type="submit"
          disabled={!name || !surname}
        >
          Kaydet
        </button>
      </form>

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
                      <input placeholder="Adınızı Yazınız" type="text" />
                      <input placeholder="Soyadınızı Yazınız" type="text" />
                      <input placeholder="TCKN Yazınız" type="text" />
                      <input
                        placeholder="Doğum Tarihinizi Giriniz"
                        type="text"
                      />
                      <input placeholder="Kan Grubunuzu Seçiniz" type="text" />
                      <input
                        placeholder="Telefon Numaranızı Yazınız"
                        type="text"
                      />
                      <input
                        placeholder="E-Mail Adresinizi Yazınız"
                        type="text"
                      />
                      <input placeholder="Adresinizi Yazınız" type="text" />
                      <input
                        placeholder="Medeni Durumunuzu Seçiniz"
                        type="text"
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
          //   onClick=
          className="bg-[#3C6E71] text-white rounded-md p-1 mr-72"
        >
          Oluştur
        </button>
      </div>
    </>
  )
}
