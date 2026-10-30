// Adapted from Kibo UI Pill (MIT). Only the Pill used by this page is retained.
// https://www.kibo-ui.com/r/pill.json
import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type PillProps = ComponentProps<typeof Badge>;

export const Pill = ({
  variant = "secondary",
  className,
  ...props
}: PillProps) => (
  <Badge
    className={cn("gap-2 rounded-full px-3 py-1.5 font-normal", className)}
    variant={variant}
    {...props}
  />
);
