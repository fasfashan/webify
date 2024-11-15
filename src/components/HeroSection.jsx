import ButtonPrimary from "./ButtonPrimary";
import { ChevronRightIcon } from "@radix-ui/react-icons";
export default function HeroSection() {
  return (
    <>
      <main className="grid grid-cols-12 mt-16">
        <div className="col-span-6 space-y-8">
          <div className="space-y-4">
            <h1 className="text-8xl font-bold tracking-tight">
              Makin Cuan di Era Digital
            </h1>
            <p className="text-lg text-neutral-600">
              Miliki Website dan Toko Online-mu Sekarang Juga!
            </p>
          </div>
          <ButtonPrimary icon={<ChevronRightIcon />} label="Daftar Gratis" />
          <div className="space-y-4">
            <p className="text-md font-semibold text-purple-600">
              Bergabung dengan yang lainnya!
            </p>
            <img className="w-36" src="social-proof.png" alt="Social Proof" />
          </div>
        </div>
        <img className="col-span-6" src="HeroImage.png" alt="HeroImage" />
      </main>
    </>
  );
}
