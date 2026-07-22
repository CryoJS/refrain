import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
    Disc3 as RefrainIcon,
    Home as HomeIcon,
    BarChart as StatsIcon,
    Music as MusicIcon,
    Settings as SettingsIcon
} from "lucide-react";

export default function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList className={"gap-2"}>
                <NavigationMenuItem className={"flex gap-2 mr-4 font-bold text-sidebar-primary"}>
                    <RefrainIcon />
                    Refrain
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/"> <HomeIcon/>Home </Link>}/>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/music"> <MusicIcon/>Music </Link>}/>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/stats"> <StatsIcon/>Stats </Link>}/>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/settings"> <SettingsIcon/>Settings </Link>}/>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}