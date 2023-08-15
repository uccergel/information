import { create } from 'zustand'
import { axiosInstance } from '..'

const useEmployeesStore = create((set) => ({
  employeesData: [],
  educationData: [],
  jobStationData: [],
  martaialStatusData: [],
  bloodGroupData: [],
  getEmployeesData: async () => {
    const response = await axiosInstance('employees')
    set({ employeesData: await response.data })
  },
  getEducationData: async () => {
    const response = await axiosInstance('education')
    set({ educationData: await response.data })
  },
  getJobStationData: async () => {
    const response = await axiosInstance('jobStation')
    set({ jobStationData: await response.data })
  },
  getMartialStatusData: async () => {
    const response = await axiosInstance('martialStatus')
    set({ martaialStatusData: await response.data })
  },
  getBloodGroupData: async () => {
    const response = await axiosInstance('bloodGroup')
    set({ bloodGroupData: await response.data })
  }
}))

export default useEmployeesStore
