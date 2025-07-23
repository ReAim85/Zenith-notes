import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const baseClasses: string =
    "cursor-pointer rounded-lg flex items-center gap-2 font-semibold";

  const size = {
    sm: "py-1 px-2 text-md ",
    md: "py-2 px-4 text-lg",
    lg: "py-4 px-6 text-xl",
  };

  const varientStyles = {
    primary: "bg-indigo-600 text-indigo-100",
    secondary: "bg-indigo-100 text-indigo-600",
  };

  const FinalButtonClasses: string = `${baseClasses} ${
    varientStyles[props.variant]
  } ${size[props.size]}`;

  return (
    <button className={FinalButtonClasses} onClick={props.onClick}>
      {props.startIcon}
      {props.text}
    </button>
  );
};
