// components/CustomButton.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;                   
  onClick?: () => void;            
  className?: string;
  type?: "button" | "submit" | "reset"; 
  disabled?: boolean; // ← 追加！
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className,
  type = "button",
  disabled = false, // ← デフォルトfalse
}) => {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled} // ← ここで反映
    >
      {children}
    </button>
  );
};

export default CustomButton;
