import { useEffect } from 'react'
import PersonalCardList from './PersonalCardList'
import PersonalListPage from './PersonalList'
import { useState } from 'react'
import { axiosInstance } from '../../utils'

export default function PersonalInfoPage() {
  const [employees, setEmployees] = useState([])
  const [jobStation, setJobStation] = useState([])
  const [education, setEducation] = useState([])

  const image =
    'https://unsplash.com/photos/W12rukDSuxc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'

  const alt = 'Profil Fotosu'

  useEffect(() => {
    const fetchData = async () => {
      await axiosInstance
        .get('/employees')
        .then((response) => setEmployees(response.data))
        .catch((error) => console.log('Veri bulunamadı!!!', error))
      await axiosInstance
        .get('/jobStation')
        .then((response) => setJobStation(response.data))
        .catch((error) => console.log('Veri bulunamadı!!!', error))
      await axiosInstance
        .get('education')
        .then((response) => setEducation(response.data))
        .catch((error) => console.log('Veri bulunamadı!!!', error))
    }
    fetchData()
  }, [])

  const detailPage = () => {
    return console.log('Detay bilgisi geldi.')
  }
  // const jobStationName = () => {
  //   jobStation?.find((jobStation) => jobStation?.id === employees?.jobStationId)
  //     ?.name
  // }

  return (
    <div className="page-container">
      <PersonalListPage />
      <div className="flex">
        {employees?.map((employee) => (
          <PersonalCardList
            onClick={detailPage}
            image={image}
            alt={alt}
            key={employee.id}
            name={employee.name}
            surname={employee.surname}
            birthDate={employee.birthDate}
            education={
              education?.find(
                (education) => education?.id === employee?.educationId
              )?.name
            }
            jobStation={
              jobStation?.find(
                (jobStation) => jobStation?.id === employee?.jobStationId
              )?.name
            }
          />
        ))}
      </div>
    </div>
  )
}
