"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter } from "next/navigation";
import TransitionLink from "./transition-link";

export function ZarpNavigation() {
  const pathName = usePathname();
  const { push } = useRouter();
  const handleRouteNavigation = (route: string) => {
    if (pathName === route) {
      return;
    } else {
      push(route);
    }
  };
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex w-max">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="bg-transparent font-rhithmic"
            // onClick={(e) => e.preventDefault()}
          >
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <TransitionLink href="/">
                  <NavigationMenuLink
                    className="bg-transparent cursor-pointer"
                    asChild
                  >
                    <div
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      style={{
                        backgroundImage: "url('/hero.jpg')",
                      }}
                    >
                      <div className="mt-4 text-lg font-medium font-livret-sans text-white">
                        Zarp
                      </div>
                      <p className="text-sm leading-tight text-gray-100/60">
                        Enjoy faster deliveries like never before
                      </p>
                    </div>
                  </NavigationMenuLink>
                </TransitionLink>
              </li>
              <ListItem href="/#why-zarp" title="Why choose us?">
                Learn what makes Zarp the fastest and most reliable delivery
                platform.
              </ListItem>
              <ListItem href="/#partners" title="Partners & Supporters">
                Discover the brands and organizations that trust and support
                Zarp.
              </ListItem>
              <ListItem title="Frequently Asked Questions" href="/#faq">
                Find quick answers to common questions about how Zarp works.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="bg-transparent font-rhithmic"
            // onClick={() => handleRouteNavigation("/about")}
          >
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {/* {components.map((component) => (
                <ListItem
                  key={component.title} 
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))} */}
              <ListItem href="/about" title="Our Story">
                Learn how we started and what drives our mission forward.
              </ListItem>

              <ListItem href="team" title="Our Team">
                Meet the people behind the product, working to deliver
                excellence.
              </ListItem>

              <ListItem href="careers" title="Careers">
                Join us in shaping the future — explore open roles.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            // className="bg-transparent"
            asChild
            className="bg-transparent font-rhithmic"
          >
            <Link href="">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent font-rhithmic">
            List
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink className="bg-transparent" asChild>
                  <Link href="">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-transparent" asChild>
                  <Link href="">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-transparent" asChild>
                  <Link href="">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <TransitionLink href={href}>
        <NavigationMenuLink asChild>
          <div>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </div>
        </NavigationMenuLink>
      </TransitionLink>
    </li>
  );
}
