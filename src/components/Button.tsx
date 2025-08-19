// components/CustomButton.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;           // 遷移先URLは任意
  onClick?: () => void;    // クリックイベントも任意
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ children, href, onClick, className }) => {
  if (href) {
    // hrefがある場合はリンクとして動作
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  // hrefがない場合はボタンとして動作
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CustomButton;
