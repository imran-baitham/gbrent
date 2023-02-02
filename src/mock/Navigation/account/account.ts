import { TAppIcons } from "@/components";

interface TypeProps {
  name: string;
  href: string;
  icon: TAppIcons;
}

export const Signup: TypeProps[] = [
  { name: "Profile", href: "/account/profile", icon: "BsPersonFill" },
  { name: "My Uplaods", href: "/account/myuplaods", icon: "RiFileUploadFill" },
  { name: "Settings", href: "/account/settings", icon: "IoMdSettings" },
  {
    name: "Report Problem",
    href: "/account/report-problem",
    icon: "AiFillFlag",
  },
  { name: "Sign out", href: "/", icon: "RiLogoutBoxLine" },
];

export const Login: TypeProps[] = [
  { name: "Sign In", href: "/account/login", icon: "RiLoginBoxFill" },
  { name: "Sign Up", href: "/account/signup", icon: "GoSignIn" },
];

// ================== Slug

interface AccountProps {
  id: number | string;
  name: string;
  slug: string;
  icon: TAppIcons;
}

export let UserStaticPaths: AccountProps[] = [
  {
    id: 1,
    slug: "profile",
    name: "Profile",
    icon: "BsPersonFill",
  },
  {
    id: 2,
    slug: "myuplaods",
    name: "myuplaods",
    icon: "RiFileUploadFill",
  },
  {
    id: 3,
    slug: "settings",
    name: "settings",
    icon: "IoMdSettings",
  },
  {
    id: 4,
    slug: "report-problem",
    name: "report-problem",
    icon: "AiFillFlag",
  },
  // { id: 5, name: "Sign out", slug: "/", icon: "RiLogoutBoxLine" },
];
