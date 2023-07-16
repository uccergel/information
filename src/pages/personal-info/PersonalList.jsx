import { useEffect, useState } from 'react'
import SearchIcon from '../../icons/SearchIcon'
import UserPlusIcon from '../../icons/UserPlusIcon'
import { axiosInstance } from '../../utils'
import { NavLink } from 'react-router-dom'
import EditIcon from '../../icons/EditIcon'

export default function PersonalListPage() {
  const [employees, setEmployees] = useState([])
  const [jobStation, setJobStation] = useState([])
  const [bloodGroup, setBloodGroup] = useState([])
  const [martialStatus, setMartialStatus] = useState([])
  const [education, setEducation] = useState([])
  const [filterEmployee, setFilterEmployee] = useState('')

  const theadItems = (
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
  )

  useEffect(() => {
    axiosInstance
      .get('/employees')
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err))
    axiosInstance
      .get('/jobStation')
      .then((res) => setJobStation(res.data))
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

  const filtered = employees.filter((employee) => {
    return Object.keys(employee).some((key) =>
      employee[key]
        .toString()
        .toLowerCase()
        .includes(filterEmployee.toLocaleLowerCase())
    )
  })

  return (
    <div className="p-5 bg-[#3C6E71]/30">
      <div className="">
        <h1 className="font-bold text-2xl mb-10">Personel Listesi</h1>
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <input
                type="search"
                placeholder="Aradığınız Personel"
                className="bg-[#3C6E71]/10 mr-2 rounded-md placeholder:p-2 focus:p-2 placeholder:text-black mb-4"
                value={filterEmployee}
                onChange={(event) => setFilterEmployee(event.target.value)}
              />
              <button
                // onClick={filtered}
                className="hover:bg-[#3C6E71]/30 rounded-full p-2"
              >
                <SearchIcon />
              </button>
            </div>
            <NavLink
              to="/create-person"
              className="hover:bg-[#3C6E71]/30 rounded-full p-2"
            >
              <UserPlusIcon />
            </NavLink>
          </div>
          <table className="mb-10">
            <thead>{theadItems}</thead>
            <tbody>
              {employees?.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-[#3C6E71]/30 hover:rounded-xl"
                >
                  <td className="p-1">
                    {employee.name} {employee.surname}
                  </td>
                  <td className="p-1 text-center hover:font-medium hover:p-2 hover:rounded-xl">
                    {employee.eMail}
                  </td>
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
                  <td>
                    <button>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span className="font-semibold">
            Toplam Personel Sayısı: {employees.length}
          </span>
        </div>
      </div>
    </div>
  )
}
