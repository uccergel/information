export default function PersonalCardList({
  name,
  surname,
  education,
  jobStation,
  birthDate,
  image,
  alt
}) {
  return (
    <div className="border rounded-xl shadow-xl border-slate-500 p-2 m-2 w-60 h-64">
      <section>
        <img className="rounded-xl" src={image} height={160} alt={alt} />
      </section>
      <section className="flex flex-col p-2">
        <h3 className="text-lg font-semibold">
          {name} {surname}
        </h3>
        <span>{birthDate}</span>
      </section>
      <section className="flex justify-between p-2">
        <span>{education}</span>
        <span>{jobStation}</span>
      </section>
      <button className="border p-2 rounded-xl bg-lime-600">Detay</button>
    </div>
  )
}
