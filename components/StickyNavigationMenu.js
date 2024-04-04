import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLeaflet } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRadixui } from "react-icons/si";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const StickyNavigationMenu = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Proje Hakkında</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://acikveri.bizizmir.com/dataset/kultur-ve-sanat-merkezleri"
                    >
                      <Image
                        src="/images/izmir.svg"
                        height={40}
                        width={40}
                        alt="İzmir Büyükşehir Belediyesi"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Sanat Merkezim
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Veriler, İzmir Büyükşehir Belediyesi'nin "Açık Veri
                        Portalı" üzerinden gelmektedir.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <div>
                      <p className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                        Kullanılan Kütüphaneler
                      </p>
                      <ul className="ml-6 mt-2 space-y-1 text-sm">
                        <li className="flex items-center">
                          <FaReact className="inline-block mr-1" />
                          <span>React</span>
                        </li>
                        <li className="flex items-center">
                          <TbBrandNextjs className="inline-block mr-1" />
                          <span>Next.js</span>
                        </li>
                        <li>ShadcnUI</li>
                        <li className="flex items-center">
                          <SiTailwindcss className="inline-block mr-1" />
                          <span>Tailwind CSS</span>
                        </li>
                        <li className="flex items-center">
                          <SiLeaflet className="inline-block mr-1" />
                          <span>Leaflet</span>
                        </li>
                        <li>Lucide</li>
                        <li className="flex items-center">
                          <SiRadixui className="inline-block mr-1" />
                          <span>Radix UI</span>
                        </li>
                        <li className="flex items-center">
                          <IoLogoVercel className="inline-block mr-1" />
                          <span>Vercel</span>
                        </li>
                        <li className="flex items-center">
                          <FaGithub className="inline-block mr-1" />
                          <span>Github</span>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/docs/installation"
                    >
                      Proje Dosyaları
                    </a>
                  </NavigationMenuLink>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Add more menu items as needed */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default StickyNavigationMenu;
