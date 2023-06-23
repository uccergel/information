import { useEffect, useState } from 'react'
import SearchIcon from '../icons/SearchIcon'
import { axiosInstance } from '../utils'

export default function PersonalInfoPage() {
  const [employees, setEmployees] = useState([])
  const [jobStation, setJobStation] = useState([])
  const [bloodGroup, setBloodGroup] = useState([])
  const [martialStatus, setMartialStatus] = useState([])
  const [education, setEducation] = useState([])

  useEffect(() => {
    axiosInstance
      .get('/employees')
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err))
    axiosInstance
      .get('/jobStation')
      .then((res) => setJobStation(res.data))
      // .then((res) => res.data)
      // .then(setJobStations)
      .catch((err) => console.log(err))
    axiosInstance
      .get('/bloodGroup')
      .then((res) => setBloodGroup(res.data))
      .catch((err) => console.log(err))
    axiosInstance
      .get('/martialStatus')
      .then((res) => setMartialStatus(res.data))
      .catch((err) => console.log(err))
    axiosInstance
      .get('/education')
      .then((res) => setEducation(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="page-container mt-10 bg-[#3C6E71]/30">
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
              {employees?.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-[#3C6E71]/30 hover:rounded-xl"
                >
                  <td className="p-1">
                    {employee.name} {employee.surname}
                  </td>
                  <td className="p-1 text-center">{employee.eMail}</td>
                  <td className="p-1 text-center">{employee.phoneNumber}</td>
                  <td className="p-1 text-center">{employee.birthDate}</td>
                  <td className="p-1 text-center">
                    {
                      jobStation?.find(
                        (jobStation) =>
                          jobStation?.id === employee?.jobStationId
                      )?.name
                    }
                  </td>
                  <td className="p-1 text-center">
                    {
                      bloodGroup?.find(
                        (bloodGroup) =>
                          bloodGroup?.id === employee?.bloodGroupId
                      )?.name
                    }
                  </td>
                  <td className="p-1 text-center">
                    {
                      martialStatus?.find(
                        (martialStatus) =>
                          martialStatus?.id === employee?.martialStatusId
                      )?.name
                    }
                  </td>
                  <td className="p-1 text-center">
                    {
                      education?.find(
                        (education) => education?.id === employee?.educationId
                      )?.name
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
