import { useEffect } from 'react'
import useEmployeesStore from '../../utils/store/EmployeesStore'
import { Table } from '@mantine/core'
import { shallow } from 'zustand/shallow'

export default function PersonalListPage() {
  const {
    employeesData,
    getEmployeesData,
    educationData,
    getEducationData,
    martialStatusData,
    getMartialStatusData,
    jobStationData,
    getJobStationData,
    bloodGroupData,
    getBloodGroupData
  } = useEmployeesStore(
    (state) => ({
      employeesData: state.employeesData,
      getEmployeesData: state.getEmployeesData,
      educationData: state.educationData,
      getEducationData: state.getEducationData,
      martialStatusData: state.martialStatusData,
      getMartialStatusData: state.getMartialStatusData,
      jobStationData: state.jobStationData,
      getJobStationData: state.getJobStationData,
      bloodGroupData: state.bloodGroupData,
      getBloodGroupData: state.getBloodGroupData
    }),
    shallow
  )
  const theadItems = (
    <tr>
      <th>Adı Soyadı</th>
      <th>E-Mail</th>
      <th>Telefon Numarası</th>
      <th>Doğum Tarihi</th>
      <th>Birimi</th>
      <th>Kan Grubu</th>
      <th>Medeni Durumu</th>
      <th>Eğitim Durumu</th>
    </tr>
  )

  const trowItems = employeesData?.map((employeeData) => (
    <tr key={employeeData.id}>
      <td>
        {employeeData.name} {employeeData.surname}
      </td>
      <td>{employeeData.eMail}</td>
      <td>{employeeData.phoneNumber}</td>
      <td>{employeeData.birthDate}</td>
      <td>
        {
          jobStationData?.find(
            (jobStationData) =>
              jobStationData?.id === employeeData?.jobStationId
          )?.name
        }
      </td>
      <td>
        {
          bloodGroupData?.find(
            (bloodGroupData) =>
              bloodGroupData?.id === employeeData?.bloodGroupId
          )?.name
        }
      </td>
      <td>
        {
          martialStatusData?.find(
            (martialStatusData) =>
              martialStatusData?.id === employeeData?.martialStatusId
          )?.name
        }
      </td>
      <td>
        {
          educationData?.find(
            (educationData) => educationData?.id === employeeData?.educationId
          )?.name
        }
      </td>
    </tr>
  ))

  useEffect(() => {
    getEmployeesData()
    getEducationData()
    getJobStationData()
    getMartialStatusData()
    getBloodGroupData()
  }, [])

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-center font-semibold text-2xl mb-5">
        Personel Listesi
      </h2>
      <Table striped highlightOnHover withColumnBorders withBorder>
        <thead>{theadItems}</thead>
        <tbody>{trowItems}</tbody>
      </Table>
      <span>Toplam Personel Sayısı: {employeesData.length} </span>
    </div>
  )
}
