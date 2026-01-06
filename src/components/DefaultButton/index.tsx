import type { ComponentProps } from "react";
import styles from "./styles.module.css";
import type React from "react";

interface DefaultButtonProps extends ComponentProps<"button"> {
  icon: React.ReactNode;
  color?: "green" | "red";
}

export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[color]}`}>
      {icon}
    </button>
  );
}
