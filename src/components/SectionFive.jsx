import ButtonPrimary from "./ButtonPrimary";
import { ChevronRightIcon } from "@radix-ui/react-icons";
export default function SectionFive() {
  return (
    <div className="flex  max-w-6xl m-auto flex-col mt-28  justify-center space-y-10">
      <div className="space-y-4">
        <p className="text-lg text-purple-600 font-medium text-center">
          Perluas Pasar, Jangkau Lebih Banyak Pembeli, dan
        </p>{" "}
        <h2 className="text-5xl max-w-2xl m-auto font-bold text-center tracking-tight">
          Tingkatkan Penjualanmu dalam 5 Langkah Mudah
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="flex justify-end min-h-[500px] p-6 space-y-4 flex-col bg-[url('/fnb.jpg')] bg-cover   rounded-md border border-neutral-200 col-span-4 ">
          <p className="text-xl text-white font-semibold">Makanan & Minuman</p>
        </div>
        <div className="flex justify-end p-6 space-y-4 flex-col bg-[url('/toserba.jpg')] bg-cover   rounded-md border border-neutral-200 col-span-4 ">
          <p className="text-xl text-white font-semibold">Toko Serba Ada</p>
        </div>
        <div className="flex justify-end p-6 space-y-4 flex-col bg-[url('/furniture.jpg')] bg-cover   rounded-md border border-neutral-200 col-span-4 ">
          <p className="text-xl text-white font-semibold">
            Furnitur dan Perlengkapan Rumah
          </p>
        </div>
        <div className="flex justify-end min-h-[500px] p-6 space-y-4 flex-col bg-[url('/elektronik.jpg')] bg-cover   rounded-md border border-neutral-200 col-span-4 ">
          <p className="text-xl text-white font-semibold">
            Elektronik & Gadget
          </p>
        </div>
        <div className="flex justify-end p-6 space-y-4 flex-col bg-[url('/toko-emas.jpg')] bg-cover   rounded-md border border-neutral-200 col-span-4 ">
          <p className="text-xl text-white font-semibold">
            Toko Emas & Perhiasan
          </p>
        </div>
        <div className="flex justify-end p-6 space-y-4 flex-col bg-[url('/fashion.jpg')] bg-cover   rounded-md border border-neutral-200 col-span-4 ">
          <p className="text-xl text-white font-semibold">
            Furnitur dan Perlengkapan Rumah
          </p>
        </div>
      </div>
      <div className="flex justify-center m-auto">
        <ButtonPrimary icon={<ChevronRightIcon />} label="Coba Sekarang Juga" />
      </div>
    </div>
  );
}
