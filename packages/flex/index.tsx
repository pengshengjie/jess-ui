import React, { PropsWithChildren, forwardRef, HTMLAttributes } from "react";

import classnames from "classnames";

type FlexComonProps = {
  gap?: number;
  gapX?: number;
  gapY: number;
  display: "inline-flex" | "flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "stretch"
    | "evenly";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
};
type FlexDivProps = { htmlType?: "div" } & PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>;
type FlexSpanProps = { htmlType: "span" } & PropsWithChildren<
  HTMLAttributes<HTMLSpanElement>
>;
type FlexProps = FlexComonProps & (FlexDivProps | FlexSpanProps);

const Flex = forwardRef<React.ElementRef<"div">, FlexProps>(
  (
    {
      htmlType: Component = "div",
      gap,
      gapX,
      gapY,
      display,
      direction = "row",
      justify = "start",
      align = "start",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        data-gap={gap}
        data-gap-x={gapX}
        data-gap-y={gapY}
        className={classnames(
          "jess-flex",
          {
            [`gap-${gap}`]: Number.isInteger(gap),
            [`gap-x-${gap}`]: Number.isInteger(gap),
            [`gap-x-${gap}`]: Number.isInteger(gap),
            [`items-${align}`]: align,
            [`justify-${justify}`]: justify,
          },
          className
        )}
        {...props}
      />
    );
  }
);

export default Flex;
