import React from "react";

interface Props {
  label: string;
  color: {
    badge: string;
    dot: string;
  };
}

const Pill = ({ label, color }: Props) => {
  const baseStyles =
    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-1";

  return (
    <span className={`${baseStyles} ${color.badge} ${color.dot}`}>{label}</span>
  );
};

export default Pill;
