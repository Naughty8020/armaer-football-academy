import Link from 'next/link';

export default function FooterMain() {
  return (
    <div className="border-t border-gray-700 pt-8 lg:pt-16"> {/* 薄めの境界線 */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Training */}
        <div>
          <p className="font-medium text-white text-sm sm:text-base">training</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/coaching" className="text-gray-300 hover:text-white">
                1on1 Coaching
              </Link>
            </li>
            <li>
              <Link href="/company-review" className="text-gray-300 hover:text-white">
                Company Review
              </Link>
            </li>
            <li>
              <Link href="/accounts-review" className="text-gray-300 hover:text-white">
                Accounts Review
              </Link>
            </li>
          </ul>
        </div>

        {/* About Team */}
        <div>
          <p className="font-medium text-white text-sm sm:text-base">about team</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/coach" className="text-gray-300 hover:text-white">
                Coach
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-medium text-white text-sm sm:text-base">contact</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                LINE
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Q&amp;A
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="font-medium text-white text-sm sm:text-base">legal</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/accessibility" className="text-gray-300 hover:text-white">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="/returns-policy" className="text-gray-300 hover:text-white">
                Returns Policy
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
