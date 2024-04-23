import { cn } from "../utils";
import React, { HTMLAttributes, PropsWithChildren, forwardRef } from "react";

type Size = "small" | "middle" | "large"
type Radius = "small" | "middle" | "large" | "none"

type ButtonCommonProps = {
    disabled?: boolean;
    size?: Size;
    radius?: Radius;
};
type ButtonTypeProps = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
type ButtonProps = ButtonCommonProps & ButtonTypeProps;

const Button = forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({
    disabled = false,
    size,
    ...props
  }, ref) => {
    return (
      <button
        disabled={disabled}
        data-size={size}
        ref={ref}
        className={cn()}
        {...props}
      ></button>
    );
  }
);

export default Button;
