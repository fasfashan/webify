export default function SectionSix() {
  return (
    <div className="flex mt-28 mb-40 max-w-6xl m-auto flex-col  justify-center space-y-10">
      <div className="space-y-4">
        <h2 className="text-5xl max-w-2xl m-auto font-bold text-center tracking-tight">
          Ingin Duduk Manis tapi Jualan Online Makin Laris?
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="flex space-y-2 flex-col border p-6 bg-white border-neutral-300 rounded-lg  col-span-4 ">
          <img width={80} src="sosmed.gif" alt="" />
          <h4 className="text-lg  font-semibold">Jasa Kelola Social Media</h4>
          <p className="text-neutral-500">
            Promosi lebih jauh di IG, Tiktok, Facebook, dan lainnya untuk
            tingkatkan branding & penjualan.
          </p>
        </div>
        <div className="flex space-y-2 flex-col border p-6 bg-white border-neutral-300 rounded-lg  col-span-4 ">
          <img width={80} src="marketplace.gif" alt="" />
          <h4 className="text-lg  font-semibold">Jasa Kelola Marketplace</h4>
          <p className="text-neutral-500">
            Buka toko online di marketplace terlaris di Indonesia - dari Shopee,
            Tokopedia, Lazada, dan lainnya.
          </p>
        </div>
        <div className="flex space-y-2 flex-col border p-6 bg-white border-neutral-300 rounded-lg  col-span-4 ">
          <img width={80} src="photo.gif" alt="" />
          <h4 className="text-lg  font-semibold">
            Jasa Foto, Video, dan Konten Produk
          </h4>
          <p className="text-neutral-500">
            Pasarkan produkmu dengan foto, video, dan deskripsi produk yang
            lebih profesional dan SEO-friendly.
          </p>
        </div>
      </div>
    </div>
  );
}
