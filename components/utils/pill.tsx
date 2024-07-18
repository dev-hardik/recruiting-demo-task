import React from "react";

interface Props {
  label: string;
  color: {
    badge: string;
    dot: string;
  };
}
export const Pill = ({ label, color }: Props) => {
  return (
    <span
      className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mr-1 ${color.badge} ${color.dot}`}
    >
      {label}
    </span>
  );
};
