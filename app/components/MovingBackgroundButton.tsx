// components/MovingBackgroundButton.tsx
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export const MovingBackgroundButton: React.FC = () => {
  return (
    <div>
        <Link href="https://calendly.com/exoticuiux/requirements-discussion" passHref>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Book Call Now 
        </Button>
        </Link>
    </div>
  );
};
