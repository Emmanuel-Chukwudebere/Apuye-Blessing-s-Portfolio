
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { AnimatedCounterProps } from '../types';

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
  textBefore = "",
  textAfterCounter = "",
  textAfterUnit = "",
  className = "", // Applied to the wrapper span
  valueClassName = "text-3xl font-bold text-brand-emerald", // For the number
  labelClassName = "text-sm text-gray-600", // For textBefore and textAfterUnit
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const valueRef = useRef(0);
  const stepTime = 40; // Update interval in ms

  useEffect(() => {
    valueRef.current = 0; // Start from 0 for each targetValue change
    setCurrentValue(0);

    // If targetValue is 0, set it immediately and don't animate
    if (targetValue === 0) {
      setCurrentValue(0);
      return;
    }
    
    const steps = Math.max(1, Math.floor(duration / stepTime));
    const increment = targetValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      valueRef.current += increment;

      if (currentStep >= steps) {
        setCurrentValue(targetValue); // Ensure it ends exactly on target
        clearInterval(timer);
      } else {
        // For integer display, use Math.round or Math.floor based on preference
        // Using Math.round for smoother visual increment for larger numbers
        setCurrentValue(Math.round(valueRef.current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  const formattedValue = currentValue.toLocaleString(undefined, {
    // Optional: format very large numbers, e.g. with K, M, etc.
    // For now, standard locale string for numbers like 200,000
  });

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className={valueClassName}>
        {textBefore && <span className="mr-0.5">{textBefore}</span>}
        {formattedValue}
        {textAfterCounter && <span className="ml-0.5">{textAfterCounter}</span>}
      </span>
      {textAfterUnit && <span className={labelClassName}>{textAfterUnit}</span>}
    </div>
  );
};

export default AnimatedCounter;