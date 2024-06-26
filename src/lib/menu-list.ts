import {
  ArrowUpRight,
  LayoutGrid,
  MessageCircle,
  NotepadText,
  Settings,
  TwitterIcon,
  Users,
} from "lucide-react";
import { icons } from "./icons";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
  svg?: any;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Analytics",
      menus: [
        {
          href: "/dashboard",
          label: "All Information",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/dashboard",
          label: "Discord",
          active: pathname.includes("/dashboardsdfsdfsdf"),
          icon: LayoutGrid,
          submenus: [],
          svg: icons.discord,
        },
        {
          href: "/dashboard",
          label: "Telegram",
          active: pathname.includes("/dashboardsdfsdf"),
          icon: LayoutGrid,
          submenus: [],
          svg: icons.telegram,
        },
        {
          href: "/dashboard",
          label: "Twitter",
          active: pathname.includes("/dashboardsdfsdf"),
          icon: TwitterIcon,
          svg: icons.x,
          submenus: [],
        },
        {
          href: "/dashboard",
          label: "Forum",
          active: pathname.includes("/dashboardsdf"),
          icon: Users,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Ai Features",
      menus: [
        {
          href: "/categories",
          label: "DAOi Chat",
          active: pathname.includes("/categories"),
          icon: MessageCircle,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Docs",
          active: pathname.includes("/tags"),
          icon: NotepadText,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "More",
      menus: [
        {
          href: "/users",
          label: "Website",
          active: pathname.includes("/users"),
          icon: ArrowUpRight,
          submenus: [],
        },
        {
          href: "/account",
          label: "Settings",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}

// {
//   href: "",
//   label: "Posts",
//   active: pathname.includes("/posts"),
//   icon: SquarePen,
//   submenus: [
//     {
//       href: "/posts",
//       label: "All Posts",
//       active: pathname === "/posts"
//     },
//     {
//       href: "/posts/new",
//       label: "New Post",
//       active: pathname === "/posts/new"
//     }
//   ]
// },
