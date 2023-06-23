export default function PersonInfoPage() {
  return (
    <div className="page-container">
      <div className="flex  bg-[#284B63]/30 shadow-2xl p-4 mt-10">
        {/* bg-[#3C6E71]/30  orta alan alt kısmın alt kısmının sol kısmı giriş*/}
        <div className="w-2/12">
          <h3 className="font-bold text-xl">
            {/* <LeftArrowIcon /> */}
            2022
            {/* <RightArrowIcon /> */}
          </h3>
          <ul>
            <li className="hover:bg-slate-600">Ocak</li>
            <li>Şubat</li>
            <li>Mart</li>
            <li>Nisan</li>
            <li>Mayıs</li>
            <li>Haziran</li>
            <li>Temmuz</li>
            <li>Ağustos</li>
            <li>Eylül</li>
            <li>Ekim</li>
            <li>Kasım</li>
            <li>Aralık</li>
          </ul>
        </div>
        {/* <!-- orta alan alt kısmın alt kısmının sol kısmı bitiş -->
    <!-- orta alan alt kısmın alt kısmının sağ kısmı giriş --> */}
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
