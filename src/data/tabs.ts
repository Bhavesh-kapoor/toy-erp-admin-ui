import { FaHome } from "react-icons/fa";

// Define tabs
export const tabs = [
  {
    id: 1,
    tabs: [],
    icon: FaHome,
    label: "Dashboard",
    href: "/dashboard",
    pageTitle: "Overview",
    permission: "Dashboard", // Add a permission attribute
  },
  // {
  //   id: 2,
  //   icon: FaBlog,
  //   label: "Blogs",
  //   href: "/dashboard/blogs",
  //   pageTitle: "Blogs",
  //   permission: "Blogs",
  // },
];
