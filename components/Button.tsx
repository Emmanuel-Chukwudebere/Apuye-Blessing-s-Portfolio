import * as React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  target,
  rel,
  icon,
  iconAfter,
  isFullWidth = false, // Can be used for individual full-width buttons
  disabled = false,
}) => {
  // Softer base shadow applied here, variants can override or add more
  const baseStyles = `inline-flex items-center justify-center font-semibold rounded-full shadow-soft-md hover:shadow-soft-lg focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95`;
  
  const iconBaseClass = "inline-block flex-shrink-0 flex items-center justify-center";
  const iconSizeStyles = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-5 h-5",
    xlarge: "w-6 h-6"
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm", // Reduced padding for better header fit
    medium: "px-8 py-3.5 text-base", // Slightly more padding
    large: "px-10 py-4 text-lg",
    xlarge: "px-12 py-5 text-xl"
  };

  const variantStyles = {
    primary: "bg-brand-emerald text-white hover:bg-green-700 focus:ring-green-300",
    secondary: "bg-white text-brand-emerald hover:bg-brand-green-tint-light focus:ring-green-200 border-2 border-brand-emerald", // Updated border color
    outline: "bg-transparent text-brand-emerald border-2 border-brand-emerald hover:bg-brand-emerald hover:text-white focus:ring-green-300",
    ghost: "bg-transparent text-brand-charcoal hover:bg-brand-green-tint-light hover:text-brand-emerald focus:ring-green-200 shadow-none hover:shadow-none",
    link: "text-brand-emerald hover:text-green-700 underline p-0 shadow-none hover:shadow-none focus:ring-green-300",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100 hover:shadow-soft-md";
  const fullWidthStyles = isFullWidth ? "w-full" : "";

  // Parent containers will typically handle widths for side-by-side buttons using grid/flex
  // For example, grid grid-cols-1 sm:grid-cols-2 will make buttons fill cell width
  // If specific `w-full` needed on mobile for buttons not in a grid, apply `isFullWidth` or `className="w-full sm:w-auto"`
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidthStyles} ${disabled ? disabledStyles : ''} ${className}`;

  const content = (
    <>
      {icon && <span className={`${iconBaseClass} ${iconSizeStyles[size]} ${children ? 'mr-2' : ''}`}>{icon}</span>}
      {children}
      {iconAfter && <span className={`${iconBaseClass} ${iconSizeStyles[size]} ${children ? 'ml-2' : ''}`}>{iconAfter}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;