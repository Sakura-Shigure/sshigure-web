"use client";

import { Link, LinkIcon } from "@nextui-org/link";
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
import { useState } from "react";
import { delay } from "framer-motion";

interface TopbarItemModel {
  name: string;
  pathname: string;
}

export const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let currentPathName = usePathname().split("/");

  const topbarItems: TopbarItemModel[] = [
    { name: "首頁", pathname: "" },
    { name: "人物設定", pathname: "character" },
    { name: "圖庫", pathname: "gallery" },
    { name: "私心推薦", pathname: "recommend" },
    { name: "關於", pathname: "about" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-4",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
          "data-[active=true]:font-normal",
        ],
      }}
    >
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
          <NavbarItem
            className="font-normal"
            key={i}
            isActive={data.pathname === currentPathName[1]}
          >
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
                <div className="text-small align-top">@sakurashigure</div>
                <Link
                  className="pt-1"
                  size="sm"
                  isExternal
                  href="https://discord.gg/VNq2pTuSMx"
                >
                  伺服器連結
                  <LinkIcon />
                </Link>
              </div>
            </PopoverContent>
          </Popover>
          <Tooltip content="@SakuraShigure99" delay={500}>
            <Link isExternal href="https://twitter.com/SakuraShigure99">
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
              onPress={() => delay(() => setIsMenuOpen(false), 100)}
            >
              {data.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
