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

<nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent bg-opacity-100 text-white"
                    : ""
                } p-2 py-2 mb-2 rounded-md border border-transparent opacity-60 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex gap-2 text-base items-center"
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
      </aside>
    </>
  );
};

export default SideNavigation;