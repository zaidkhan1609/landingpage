"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export const NavBar: React.FC = () => {
  const navItems = [
    {
      name: "RecriX",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 " />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Contact us",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems}
        onOpenWaitlist={() => {
          // Fires a global event that Hero listens to
          const evt = new CustomEvent("open-waitlist-modal");
          window.dispatchEvent(evt);
        }}
      />
    </div>
  );
};
