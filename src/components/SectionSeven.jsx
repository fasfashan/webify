import { ChevronRightIcon } from "@radix-ui/react-icons";
import { HiCheckCircle } from "react-icons/hi";
import ButtonSecondary from "./ButtonSecondary";

export default function SectionSeven() {
  return (
    <>
      <div className="mt-28 flex-col py-24  bg-amber-50 justify-center space-y-10">
        <h2 className="text-5xl max-w-2xl m-auto font-bold text-center tracking-tight">
          {" "}
          Siap Cuan dari Toko Online? Yuk, Mulai Sekarang!
        </h2>
        <div className="grid max-w-6xl m-auto grid-cols-12 gap-5">
          <div className="flex justify-between space-y-8 flex-col border p-6 bg-white border-neutral-300 rounded-lg  col-span-4 ">
            <div className="space-y-8">
              <p className="font-semibold">Standard</p>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">Rp 50,000</h2>
                <p className="text-neutral-600">
                  Per/bulan, ditagih setiap bulan
                </p>
              </div>
              <hr />
              <ul className="space-y-2">
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Akses ke 15 template design & layout
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Subdomain sesuai nama toko
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Fitur SEO dasar
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Layanan CS via email
                </li>
              </ul>
            </div>

            <ButtonSecondary
              label="Pilih Standard"
              icon={<ChevronRightIcon />}
            />
          </div>
          <div className="flex justify-between space-y-8 flex-col border p-6 bg-white border-neutral-300 rounded-lg  col-span-4 ">
            <div className="space-y-8">
              <p className="font-semibold">Professional</p>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">Rp 150,000</h2>
                <p className="text-neutral-600">
                  Per/bulan, ditagih setiap bulan
                </p>
              </div>
              <hr />
              <ul className="space-y-2">
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Akses ke 15 template design & layout
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Subdomain sesuai nama toko
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Fitur SEO dasar
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Layanan CS via email
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Akses ke template design & layout premium
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Domain sesuai nama toko
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Fitur e-commerce dasar
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Layanan CS via WA
                </li>
              </ul>
            </div>
            <ButtonSecondary
              label="Pilih Professional"
              icon={<ChevronRightIcon />}
            />
          </div>
          <div className="flex justify-between space-y-8 flex-col relative border-2 p-6 bg-white border-purple-600 rounded-lg  col-span-4 ">
            {/* <p
              className="bg-purple-50 w-fit right-8 absolute top-0 text-purple-600 border-b border-x font-semibold text-sm border-purple-600 p-1 rounded-b-md
            "
            >
              Recommended
            </p> */}
            <div className="space-y-8">
              <p className="font-semibold">Premium</p>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">Rp 50,000</h2>
                <p className="text-neutral-600">
                  Per/bulan, ditagih setiap bulan
                </p>
              </div>
              <hr />
              <ul className="space-y-2">
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Akses ke 15 template design & layout
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Subdomain sesuai nama toko
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Fitur SEO dasar
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Layanan CS via email
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Akses ke template design & layout premium
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Domain sesuai nama toko
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Fitur e-commerce dasar
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Layanan CS via WA
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Akses ke template design & layout eksklusif
                </li>
                <li className="flex gap-2  items-center text-sm">
                  <HiCheckCircle className="text-purple-600 w-6 h-6 " />
                  Layanan CS dengan waktu respon maks. 10 menit
                </li>
              </ul>
            </div>
            <p className="font-semibold">Premium</p>

            <ButtonSecondary
              label="Pilih Premium"
              icon={<ChevronRightIcon />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
