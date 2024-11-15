export default function SectionThree() {
  return (
    <>
      <div className="flex  flex-col p-20 bg-amber-50 justify-center space-y-10">
        <h2 className="text-5xl font-bold text-center tracking-tight">
          {" "}
          Jangkau Lebih Luas dengan Bebas
        </h2>
        <div className="grid max-w-6xl gap-5 m-auto grid-cols-12">
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-white shadow-sm">
            <img src="bebas-biaya.jpg" className="rounded-md" alt="" />
            <p className="font-medium -">Bebas Biaya Sewa Tempat</p>
          </div>
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-white shadow-sm">
            <img src="bebas-buka.jpg" className="rounded-md" alt="" />
            <p className="font-medium -">Bebas Buka 24 Jam</p>
          </div>
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-white shadow-sm">
            <img src="bebas-kirim.jpg" className="rounded-md" alt="" />
            <p className="font-medium -">
              Bebas Jual & Kirim ke Seluruh Indonesia
            </p>
          </div>
          <div className="p-6 col-span-3 rounded-xl space-y-4 bg-white shadow-sm">
            <img src="bebas-diskon.jpg" className="rounded-md" alt="" />
            <p className="font-medium -">Bebas Atur Diskon dan Promosi</p>
          </div>
        </div>
      </div>
    </>
  );
}
