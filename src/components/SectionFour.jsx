export default function SectionFour() {
  return (
    <>
      <div className="flex mb-10 flex-col p-24 bg-slate-800 justify-center space-y-10">
        <h2 className="text-5xl text-white font-bold text-center tracking-tight">
          {" "}
          Jualan Online Jadi Mudah, Tanpa Susah
        </h2>
        <div className="grid max-w-6xl gap-5 m-auto grid-cols-12">
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-purple-400 shadow-sm">
            <img src="google.svg" className="rounded-md m-auto" alt="" />
            <p className="font-medium text-white text-center">
              Promosikan website dan bisnismu di Google
            </p>
          </div>
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-purple-400 shadow-sm">
            <img src="box.svg" className="rounded-md m-auto" alt="" />
            <p className="font-medium text-white text-center">
              Promosikan website dan bisnismu di Google
            </p>
          </div>
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-purple-400 shadow-sm">
            <img src="database.svg" className="rounded-md m-auto" alt="" />
            <p className="font-medium text-white text-center">
              Simpan data pembeli ke dalam database
            </p>
          </div>
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-purple-400 shadow-sm">
            <img src="report.svg" className="rounded-md m-auto" alt="" />
            <p className="font-medium text-white text-center">
              Pantau penjualan dan laporan keuangan secara otomatis
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
