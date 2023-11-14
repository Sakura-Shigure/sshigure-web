"use client";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  Button,
  Image,
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Spacer,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { DiscordIcon, TwitterIcon } from "./icons";
import { fontSans } from "@/config/fonts";
import { useState } from "react";

interface TopbarItemModel {
  name: string;
  pathname: string;
}

export const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let currentPathName = usePathname().split("/");

  const topbarItems: TopbarItemModel[] = [
    { name: "關於", pathname: "" },
    { name: "人物設定", pathname: "character" },
    { name: "委託圖", pathname: "gallery" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Image src="/oc/slime.webp" alt="" sizes="50px" width={40} />
        <Spacer x={2} />
        <p color="foreground">Sakura Shigure</p>
      </NavbarBrand>{" "}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {topbarItems.map((data, i) => (
          <NavbarItem key={i} isActive={data.pathname === currentPathName[1]}>
            <Link href={data.pathname === "" ? "/" : data.pathname}>
              {data.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button color="primary" radius="lg" variant="light" isIconOnly>
                <DiscordIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small">@sakurashigure</div>
              </div>
            </PopoverContent>
          </Popover>
          <Tooltip content="@SakuraShigure99" delay={500}>
            <Link href="https://twitter.com/SakuraShigure99">
              <Button color="primary" radius="lg" variant="light" isIconOnly>
                <TwitterIcon />
              </Button>
            </Link>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>{" "}
      <NavbarMenu>
        {topbarItems.map((data, index) => (
          <NavbarMenuItem key={`${data}-${index}`}>
            <Link
              color={
                data.pathname === currentPathName[1] ? "primary" : "foreground"
              }
              className="w-full"
              href={data.pathname === "" ? "/" : data.pathname}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {data.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
