import { SiLine, SiInstagram } from "react-icons/si";

export default function SnsIcons() {
  return (
    <ul className="mt-8 flex gap-6">
      <li>
        <a
          href="https://line.me/R/ti/p/@204fbyia"
          className="text-gray-300 hover:text-white flex flex-col items-center gap-1"
        >
          <SiLine className="h-6 w-6 text-gray-300 hover:text-white" />
          <span className="text-gray-300 text-xs hover:text-white">Jr Line</span>
        </a>
      </li>
      <li>
        <a
          href="https://line.me/R/ti/p/@387brwjo"
          className="text-gray-300 hover:text-white flex flex-col items-center gap-1"
        >
          <SiLine className="h-6 w-6 text-gray-300 hover:text-white" />
          <span className="text-gray-300 text-xs hover:text-white">Jr.ユース Line</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/armaer_football/"
          className="text-gray-300 hover:text-white flex flex-col items-center gap-1"
        >
          <SiInstagram className="h-6 w-6 text-gray-300 hover:text-white" />
          <span className="text-gray-300 text-xs hover:text-white">Instagram</span>
        </a>
      </li>
    </ul>
  );
}
