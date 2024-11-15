export default function SectionOne() {
  return (
    <>
      <div className="flex flex-col pt-20 bg-amber-50 justify-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-center tracking-tight">
            {" "}
            Mulai dari <span className="text-purple-600">Rp 50.000</span> per
            bulan
          </h2>
          <p className="text-lg text-neutral-600 text-center">
            Miliki Website dan Toko Online-mu Sekarang Juga!
          </p>
        </div>
        <img
          className="w-1/2 m-auto flex justify-center"
          src="/GoogleSearch.png"
          alt="Google Search"
        />
      </div>
    </>
  );
}
