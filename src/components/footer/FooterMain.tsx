import Link from 'next/link';

export default function FooterMain() {
  return (
    <div className="border-t border-gray-100 pt-8 lg:pt-16">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Training */}
        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">training</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/coaching" className="text-gray-700 hover:opacity-75">
                1on1 Coaching
              </Link>
            </li>
            <li>
              <Link href="/company-review" className="text-gray-700 hover:opacity-75">
                Company Review
              </Link>
            </li>
            <li>
              <Link href="/accounts-review" className="text-gray-700 hover:opacity-75">
                Accounts Review
              </Link>
            </li>
          </ul>
        </div>

        {/* About Team */}
        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">about team</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/about" className="text-gray-700 hover:opacity-75">
                About
              </Link>
            </li>
            <li>
              <Link href="/coach" className="text-gray-700 hover:opacity-75">
                Coach
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">contact</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
            <Link href="/contact" className="text-gray-700 hover:opacity-75">
                LINE
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:opacity-75">
                Q&amp;A
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">legal</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/accessibility" className="text-gray-700 hover:opacity-75">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="/returns-policy" className="text-gray-700 hover:opacity-75">
                Returns Policy
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
