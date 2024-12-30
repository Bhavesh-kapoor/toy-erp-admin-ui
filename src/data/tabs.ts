import { FaBlog } from "react-icons/fa";
import { RiSeoFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoPaperPlane } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";

// Define tabs
export const tabs = [
  {
    id: 1,
    tabs: [],
    icon: MdDashboard,
    label: "Dashboard",
    href: "/dashboard",
    pageTitle: "Overview",
    permission: "Dashboard", // Add a permission attribute
  },
  {
    id: 12,
    icon: FaBuildingUser,
    label: "Manage Transactions",
    pageTitle: "Transactions",
    permission: "Transaction",
    href: "/dashboard/transactions",
  },
  {
    id: 2,
    icon: RiAdminFill,
    label: "Manage Admin",
    href: "/dashboard/admin",
    pageTitle: "All Admins",
    permission: "Admin",
  },
  {
    id: 9,
    icon: IoPaperPlane,
    label: "Manage Subscription",
    href: "/dashboard/subscription-plans",
    pageTitle: "Subscription Plans",
    permission: "subscription",
  },
  {
    id: 10,
    icon: FaLaptopHouse,
    label: "Manage Properties",
    pageTitle: "Property List",
    permission: "Property Listing",
    href: "/dashboard/property-listing",
  },
  {
    id: 11,
    icon: FaBuildingUser,
    label: "Manage Dealer",
    pageTitle: "Dealer List",
    permission: "Dealer",
    href: "/dashboard/dealer",
  },
  {
    id: 3,
    icon: MdRateReview,
    label: "Manage Reviews",
    href: "/dashboard/reviews",
    pageTitle: "Customer Reviews",
    permission: "Reviews",
  },
  {
    id: 4,
    icon: FaBlog,
    label: "Manage Blogs",
    href: "/dashboard/blogs",
    pageTitle: "Blogs",
    permission: "Blogs",
  },
  {
    id: 6,
    icon: FaQuestionCircle,
    label: "Manage Contact Us",
    href: "/dashboard/contacts",
    pageTitle: "Contact Us",
    permission: "ContactUs",
  },
  {
    id: 7,
    icon: RiSeoFill,
    label: "Manage SEO",
    href: "/dashboard/seo",
    pageTitle: "Search Engine Optimization (SEO)",
    permission: "SEO",
  },
];
