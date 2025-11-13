import Card from "@/components/Card"
import React from 'react';

const Landing: React.FC =  () => {
interface ButtonProps {
  title: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  disabled = false
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Default styles (you can customize these)
  const defaultStyles = 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed';

  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1> 
      <Card />
    </div>
  )
}
export default Landing