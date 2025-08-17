import FooterMain from "./FooterMain";
import TeamIcon from "./TeamIcon";
import SnsIcons from "./SnsIcons";





export default function Home() {
    return (
     <>
     <footer className="bg-white">
     <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
     <TeamIcon />
  <SnsIcons />
    </div>
<FooterMain />


    <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
  </div>
</footer>
     </>
    )
  }