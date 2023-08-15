import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

export default function PersonInfoPage() {
  const year = 2023
  const months = [
    { name: 'Ocak', id: 1 },
    { name: 'Şubat', id: 2 },
    { name: 'Mart', id: 3 },
    { name: 'Nisan', id: 4 },
    { name: 'Mayıs', id: 5 },
    { name: 'Haziran', id: 6 },
    { name: 'Temmuz', id: 7 },
    { name: 'Ağustos', id: 8 },
    { name: 'Eylül', id: 9 },
    { name: 'Ekim', id: 10 },
    { name: 'Kasım', id: 11 },
    { name: 'Aralık', id: 12 }
  ]
  // const previouslyYear = () => {
  //   return year++
  // }
  // const nextYear = () => {
  //   return year--
  // }
  return (
    <div>
      <div className="flex bg-[#284B63]/30 shadow-2xl p-4 mt-10">
        <div className="w-2/12">
          <div className="space-x-2 flex font-bold text-xl mb-3">
            <button
            // onClick={previouslyYear()}
            >
              <IconArrowLeft />
            </button>
            <span>{year}</span>
            <button
            // onClick={nextYear()}
            >
              <IconArrowRight />
            </button>
          </div>
          <ul>
            {months?.map((month) => (
              <li
                key={month.id}
                className="hover:bg-slate-600 hover:rounded-lg p-2 hover:text-white"
              >
                {month.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-10/12">
          <table className="table-auto">
            <thead>
              <tr className="mb-2">
                <th className="w-1/12">SN</th>
                <th className="w-4/12">Çağrı Tarihi</th>
                <th className="w-3/12">Açıklama</th>
                <th className="w-2/12">Puan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center shadow-xl hover:bg-[#3C6E71]/50">
                <td>1</td>
                <td>19.08.2022 - 14:18</td>
                <td>lorem ipsum dolor sit amet</td>
                <td>100</td>
                <td>
                  <button className="rounded-lg p-2 bg-[#3C6E71]/50 hover:bg-[#3C6E71] hover:text-white">
                    İncele
                  </button>
                </td>
              </tr>
              <tr className="text-center shadow-xl hover:bg-[#3C6E71]/50">
                <td>1</td>
                <td>19.08.2022 - 14:18</td>
                <td>lorem ipsum dolor sit amet</td>
                <td>100</td>
                <td>
                  <button className="rounded-lg p-2 bg-[#3C6E71]/50 hover:bg-[#3C6E71] hover:text-white">
                    İncele
                  </button>
                </td>
              </tr>
              <tr className="text-center shadow-xl hover:bg-[#3C6E71]/50">
                <td>1</td>
                <td>19.08.2022 - 14:18</td>
                <td>lorem ipsum dolor sit amet</td>
                <td>100</td>
                <td>
                  <button className="rounded-lg p-2 bg-[#3C6E71]/50 hover:bg-[#3C6E71] hover:text-white">
                    İncele
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- orta alan alt kısmın alt kısmının sağ kısmı giriş --> */}
      </div>
    </div>
  )
}
