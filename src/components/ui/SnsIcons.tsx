import { SiLine, SiInstagram } from "react-icons/si";

export default function SnsIcons() {
    return (
        <>
   

      <ul className="mt-8 flex gap-6">
  <li>
    <a href="#" className="text-gray-700 hover:opacity-75 flex flex-col items-center gap-1">
      <SiLine className="h-6 w-6" />
      <span className="text-black text-xs">Jr Line</span>
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-700 hover:opacity-75 flex flex-col items-center gap-1">
      <SiLine className="h-6 w-6" />
      <span className="text-black text-xs">Jr.ユース Line</span>
    </a>
  </li>
  <li>
    <a href="#" className="text-gray-700 hover:opacity-75 flex flex-col items-center gap-1">
      <SiInstagram className="h-6 w-6" />
      <span className="text-black text-xs">Instagram</span>
    </a>
  </li>
</ul>
</>
);
}