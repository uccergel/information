import { useEffect, useState } from 'react'
import SearchIcon from '../icons/SearchIcon'

export default function PersonListPage() {
  const [employees, setEmployees] = useState()
  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json()
        }
      })
      .then((data) => setEmployees(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="p-3 mt-10 page-container bg-[#3C6E71]/30 shadow-xl rounded-xl w-[1024px]">
      <div className="w-screen">
        <h1 className="font-bold text-4xl mb-10">Personel Listesi</h1>
        <SearchIcon />
        <div className="">
          <input
            type="search"
            name=""
            placeholder="Kimi Aramıştınız..."
            className="bg-[#3C6E71]/10 mr-2 rounded-md placeholder:p-2 placeholder:text-black mb-4"
            id=""
          />
          <table>
            <thead>
              <tr>
                <th className="text-center p-3 m-1">Adı Soyadı</th>
                <th className="text-center p-3 m-1">E-Mail</th>
                <th className="text-center p-3 m-1">Telefon Numarası</th>
                <th className="text-center p-3 m-1">Doğum Tarihi</th>
                <th className="text-center p-3 m-1">Birimi</th>
                <th className="text-center p-3 m-1">Kan Grubu</th>
                <th className="text-center p-3 m-1">Medeni Durumu</th>
                <th className="text-center p-3 m-1">Eğitim Durumu</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee) => (
                  <>
                    <tr className="hover:bg-[#3C6E71]/30 hover:rounded-xl">
                      <td className="p-1" key={employee.id}>
                        {employee.name} {employee.surname}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.eMail}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.phoneNumber}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.birthDate}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.jobStationId}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.bloodGroupId}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.martialStatusId}
                      </td>
                      <td className="p-1 text-center" key={employee.id}>
                        {employee.educationId}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
