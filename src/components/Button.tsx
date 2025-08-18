// components/CustomButton.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string; // 遷移先URL
  className?: string; // 任意の追加スタイル
}

const Button: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={` ${className || ''}`}
      >
      {children}
    </Link>
  );
};

export default Button;
