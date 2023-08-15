import { create } from 'zustand'
import { axiosInstance } from '..'

const useEmployeesStore = create((set) => ({
  employeesData: [],
  getEmployeesData: async () => {
    const response = await axiosInstance('employees')
    set({ employeesData: await response.data })
  }
}))

export default useEmployeesStore
