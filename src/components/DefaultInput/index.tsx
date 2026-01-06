import type { ComponentProps } from "react";
import styles from "./styles.module.css";

interface DefaultInputProps extends ComponentProps<"input"> {
  labelText?: string;
}

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
