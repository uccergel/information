import { useEffect } from 'react'
import useEmployeesStore from '../../utils/store/EmployeesStore'
import { Table } from '@mantine/core'

export default function PersonalListPage() {
  const { employeesData, getEmployeesData } = useEmployeesStore((state) => ({
    employeesData: state.employeesData,
    getEmployeesData: state.getEmployeesData
  }))
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
    </tr>
  ))

  useEffect(() => {
    getEmployeesData()
  }, [])

  return (
    <div className="flex flex-col">
      <Table striped highlightOnHover withColumnBorders withBorder>
        <thead>{theadItems}</thead>
        <tbody>{trowItems}</tbody>
      </Table>
      <span>Toplam Personel Sayısı: {employeesData.length} </span>
    </div>
  )
}
