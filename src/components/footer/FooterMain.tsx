export default function FooterMain() {
  return (
    <div className="border-t border-gray-100 pt-8 lg:pt-16">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">training</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75">1on1 Coaching</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Company Review</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Accounts Review</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">about team</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75">About</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Coach</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">contact</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75">LINE</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Q&A</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 text-sm sm:text-base">legal</p>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75">Accessibility</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Returns Policy</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
