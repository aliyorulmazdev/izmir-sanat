import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLeaflet } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRadixui } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BiSolidComponent } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const StickyNavigationMenu = () => {
  return  (
    <div className="sticky top-0 z-50 bg-white flex justify-center w-full m-5">
      <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/'><Button variant='secondary'>Anasayfa</Button></Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-100">
              Proje Hakkında
            </NavigationMenuTrigger>
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
                        height={75}
                        width={75}
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
                          <Link href="https://react.dev/">React</Link>
                        </li>
                        <li className="flex items-center">
                          <TbBrandNextjs className="inline-block mr-1" />
                          <Link href="https://nextjs.org/">Next.js</Link>
                        </li>
                        <li className="flex items-center">
                          <MdDesignServices className="inline-block mr-1" />
                          <Link href="https://ui.shadcn.com/">shadcn/ui</Link>
                        </li>
                        <li className="flex items-center">
                          <SiTailwindcss className="inline-block mr-1" />
                          <Link href="https://tailwindcss.com/">Tailwind</Link>
                        </li>
                        <li className="flex items-center">
                          <SiLeaflet className="inline-block mr-1" />
                          <Link href="https://react-leaflet.js.org/">
                            Leaflet
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <BiSolidComponent className="inline-block mr-1" />
                          <Link href="https://lucide.dev/">Lucide</Link>
                        </li>
                        <li className="flex items-center">
                          <SiRadixui className="inline-block mr-1" />
                          <Link href="https://www.radix-ui.com/">Radix UI</Link>
                        </li>
                        <li className="flex items-center">
                          <IoLogoVercel className="inline-block mr-1" />
                          <Link href="https://vercel.com/">Vercel</Link>
                        </li>
                        <li className="flex items-center">
                          <FaGithub className="inline-block mr-1" />
                          <Link href="https://github.com/">Github</Link>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="https://github.com/aliyorulmazdev/izmir-sanat"
                    >
                      Proje Dosyaları
                    </Link>
                  </NavigationMenuLink>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-100">
              Kimdir Bu?
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://aliyrlmz.com/about"
                    >
                      <Image
                        src="/images/aliyorulmaz.jpg"
                        height={75}
                        width={75}
                        alt="İzmir Büyükşehir Belediyesi"
                        className="rounded-full"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        aydevBlog
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        <div className="mb-2">
                          <Label>Ali Yorulmaz </Label>
                        </div>
                        <Link href="https://aliyrlmz.com/about">
                          Şahsi Günlüğüm
                        </Link>
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <div>
                      <p className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                        Sosyal Medya Hesaplarım
                      </p>
                      <ul className="ml-6 mt-2 space-y-1 text-sm">
                        <li className="flex items-center">
                          <FaLinkedin className="inline-block mr-1" />
                          <Link href="https://www.linkedin.com/in/ali-yorulmaz-1a67a518a/">
                            Linked-in
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default StickyNavigationMenu;
