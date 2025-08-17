import Link from "next/link";

export default function TeamIcon(props: { className?: string }) {
    console.log("TeamIcon rendered with className:", props.className);
    return (
      <div className="flex lg:flex-1">
          <Link href="/">
          <span className="sr-only">Your Company</span>
          <img
            alt="Team Icon"
            src="/team-icon.png"
            className={`object-cover ${props.className}`}// ←ここを修正
          />
        </Link>
      </div>
    );
  }
  