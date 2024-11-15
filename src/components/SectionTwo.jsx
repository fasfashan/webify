import ButtonPrimary from "./ButtonPrimary";
import { ChevronRightIcon } from "@radix-ui/react-icons";
export default function SectionTwo() {
  return (
    <>
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
          <div className="flex space-y-4 flex-col p-10 bg-neutral-100 rounded-md border border-neutral-200 col-span-4 ">
            <p className="p-1 w-fit bg-purple-50 border border-purple-600 text-purple-600 text-sm font-semibold rounded-md">
              Langkah 1
            </p>
            <h3 className="text-xl font-semibold">Pilih jenis bisnismu</h3>
            <img
              className="hover:scale-95 transition-all"
              src="/BarChart.svg"
              alt=""
            />
          </div>
          <div className="flex space-y-4 flex-col p-10 bg-neutral-100 rounded-md border border-neutral-200 col-span-4 ">
            <p className="p-1 w-fit bg-purple-50 border border-purple-600 text-purple-600 text-sm font-semibold rounded-md">
              Langkah 2
            </p>
            <h3 className="text-xl font-semibold">Pilih jenis bisnismu</h3>
            <img
              className="hover:scale-95 transition-all"
              src="/account.svg"
              alt=""
            />
          </div>
          <div className="flex space-y-4 flex-col p-10 bg-neutral-100 rounded-md border border-neutral-200 col-span-4 ">
            <p className="p-1 w-fit bg-purple-50 border border-purple-600 text-purple-600 text-sm font-semibold rounded-md">
              Langkah 3
            </p>
            <h3 className="text-xl font-semibold">
              Jelajahi dan gunakan beragam template yang tersedia
            </h3>
            <img
              className="hover:scale-95 transition-all"
              src="/deposit.svg"
              alt=""
            />
          </div>
          <div className="flex space-y-4 flex-col p-10 bg-neutral-100 rounded-md border border-neutral-200 col-span-8 ">
            <p className="p-1 w-fit bg-purple-50 border border-purple-600 text-purple-600 text-sm font-semibold rounded-md">
              Langkah 4
            </p>
            <h3 className="text-xl font-semibold">Tentukan isi websitemu</h3>
            <img
              className="hover:scale-95 transition-all"
              src="/card.svg"
              alt=""
            />
          </div>
          <div className="flex space-y-4 flex-col p-10 bg-neutral-100 rounded-md border border-neutral-200 col-span-4 ">
            <p className="p-1 w-fit bg-purple-50 border border-purple-600 text-purple-600 text-sm font-semibold rounded-md">
              Langkah 5
            </p>
            <h3 className="text-xl font-semibold">
              Selamat! Produkmu sudah tampil dan bisa dibeli via website
            </h3>
            <img
              className="hover:scale-95 transition-all"
              src="/account.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center m-auto">
          <ButtonPrimary
            icon={<ChevronRightIcon />}
            label="Coba Sekarang Juga"
          />
        </div>
      </div>
    </>
  );
}
