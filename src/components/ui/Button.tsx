// components/CustomButton.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;                   // 遷移先URLは任意
  onClick?: () => void;            // クリックイベントも任意
  className?: string;
  type?: "button" | "submit" | "reset"; // buttonのtype属性
}

const CustomButton: React.FC<ButtonProps> = ({ children, href, onClick, className, type = "button" }) => {
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
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CustomButton;
