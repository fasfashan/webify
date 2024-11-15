import ButtonSecondary from "./ButtonSecondary";
import { ChevronRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
export default function Header() {
  return (
    <>
      <nav className="flex justify-between py-4 items-center">
        <div className="flex gap-8 items-center">
          <img src="/webify.svg" alt="Logo" />
          <ul className="flex gap-10">
            <li>Home</li>
            <li className="flex gap-2 items-center">
              Solusi <ChevronDownIcon />
            </li>
            <li>Harga</li>
            <li className="flex gap-2 items-center">
              Bantuan <ChevronDownIcon />
            </li>
          </ul>
        </div>

        <ButtonSecondary url="#" icon={<ChevronRightIcon />} label="Sign In" />
      </nav>
    </>
  );
}
