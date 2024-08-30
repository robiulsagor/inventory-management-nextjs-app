"use client";

import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  LayoutDashboard,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLinks = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start py-4 px-8"
        }  ${
          isActive ? "bg-blue-200" : ""
        } hover:bg-blue-100 hover:text-blue-500 gap-3`}
      >
        <Icon
          // size={18}
          // className={`${
          //   isActive ? "text-blue-500" : "text-gray-500 hover:text-gray-700"
          // }`}
          className="h-6 w-6 !text-gray-700"
        />

        <span
          className={`font-medium text-gray-700  ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          {label}{" "}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const sidebarClasses = `fixed flex flex-col h-full bg-white transition-all duration-300 shadow-lg z-40 overflow-hidden ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  }`;

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div className={sidebarClasses}>
      {/* top */}
      <div
        className={`flex items-center justify-between md:justify-normal gap-3 pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <p
          className={`text-2xl font-extrabold ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          SRSTOCK
        </p>
        <div
          className="md:hidden px-3 py-3 bg-gray-100 hover:bg-blue-100 rounded-full cursor-pointer"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-8 flex-grow">
        <SidebarLinks
          href="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinks
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinks
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinks
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinks
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinks
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* bottom */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-gray-500 text-xs text-center">
          Copyright &copy; 2024
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
