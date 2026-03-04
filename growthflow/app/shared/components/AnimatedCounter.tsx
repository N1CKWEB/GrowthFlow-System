import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}) => {
  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(
    spring,
    (current) => prefix + current.toFixed(decimals) + suffix,
  );
  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [value, spring, display]);

  return <span>{displayValue}</span>;
};

interface AnimatedNumberProps {
  value: string | number;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  className,
}) => {
  // Parse the value to check if it contains numbers
  const stringValue = String(value);
  const hasNumber = /\d/.test(stringValue);

  if (!hasNumber) {
    return <span className={className}>{value}</span>;
  }

  // Extract number and format
  const numMatch = stringValue.match(/[\d,]+\.?\d*/);
  if (!numMatch) {
    return <span className={className}>{value}</span>;
  }

  const numStr = numMatch[0].replace(/,/g, "");
  const num = parseFloat(numStr);
  const prefix = stringValue.substring(0, numMatch.index);
  const suffix = stringValue.substring(
    (numMatch.index || 0) + numMatch[0].length,
  );
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return (
    <span className={className}>
      <AnimatedCounter
        value={num}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        duration={1.5}
      />
    </span>
  );
};
