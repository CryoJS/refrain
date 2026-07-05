import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import {
    Disc3 as RefrainIcon,
    Home as HomeIcon,
    ListChecks as TasksIcon,
    Music as MusicIcon,
    Settings as SettingsIcon
} from "lucide-react";

export default function Navbar() {
    return (
        <NavigationMenu className={"mx-4 mt-2"}>
            <NavigationMenuList>
                <NavigationMenuItem className={"flex gap-2 mr-4 font-bold text-sidebar-primary"}>
                    <RefrainIcon />
                    Refrain
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <HomeIcon/>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <TasksIcon/>
                        Tasks
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <MusicIcon/>
                        Music
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <SettingsIcon/>
                        Settings
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}