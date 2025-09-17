import FooterMain from "@/components/footer/FooterMain";
import TeamIcon from "../ui/TeamIcon";
import SnsIcons from "../ui/SnsIcons";





export default function  FooterPage() {
    return (
     <>
     <footer className="bg-gray-50 pt-28">
     <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
    <TeamIcon className="h-20 w-70" />
  <SnsIcons />
    </div>
<FooterMain />
 FooterPage
<p className="text-xs text-gray-500">
  &copy; {new Date().getFullYear()} ARMAER-FOOTBALL-ACADEMY. All rights reserved.
</p>
  </div>
</footer>
     </>
    )
  }