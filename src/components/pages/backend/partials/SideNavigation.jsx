import { imgPath } from "@/components/helpers/functions-general";
import { LayoutDashboard, Megaphone, UtensilsCrossed } from "lucide-react";
import React from "react";

const SideNavigation = () => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16}/>,
    },
    {
      title: "Blog",
      slug: "/admin/blog",
      icon: <Megaphone size={16}/>,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <UtensilsCrossed size={16}/>,
    },
  ];
  return (
    <>
      <aside className="p-4 border-r border-line">
        <img
          src={`${imgPath}/beach-logo.jpg`}
          alt=""
          className="w-80%] mx-auto mt-2"
        />
        
      </aside>
    </>
  );
};

export default SideNavigation;