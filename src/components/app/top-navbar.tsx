import { cn, submitProblem } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import ProfileMenu from "./profile-menu"
import { Button } from "../ui/button"
import { Icon } from "../ui/icon"
import { navItems, ActionButton } from "@/lib/config/navbar"
import { useLocation, useNavigate } from "react-router"
import { useState } from "react"
import submissionPayload, { submissionSocketResponseState } from "@/lib/store/submission"

export function TopNavbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const payload = submissionPayload((state) => state.getSubmission());
    const [loadingButton, setLoadingButton] = useState<string | null>(null);
    const setSubmissionResponse = submissionSocketResponseState((state) => state.setSubmissionResponse);
    const actionButtons: ActionButton[] = [
        {
            title: "Run",
            icon: "Play",
            className: "bg-muted text-muted-foreground hover:bg-hover hover:text-accent-foreground",
            onClick: () => {
                setLoadingButton("Run");
                if (payload) {
                    submitProblem(payload).then((response) => {
                        setSubmissionResponse(response.submissionResponse);
                    })
                        .catch((error) => {
                            console.error("Error submitting problem:", error.message);
                        })
                        .finally(() => setLoadingButton(null));
                }
            }
        },
        {
            title: "Submit",
            icon: "UploadCloudIcon",
            className: "bg-muted text-easy hover:bg-hover",
            onClick: () => {
                setLoadingButton("Submit");
                setTimeout(() => {
                    setLoadingButton(null);
                }, 2000);
            }
        }
    ];
    return (
        <div className="flex justify-between items-center w-full px-4 py-2">
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink
                                className={cn(
                                    "cursor-pointer",
                                    location.pathname === item.href && "text-accent-foreground font-medium"
                                )}
                                onClick={() => navigate(item.href)}
                            >
                                {item.icon && <Icon name={item.icon} className="mr-2" />}
                                {item.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-0.5">
                {actionButtons.map((button) => {
                    const isLoading = loadingButton === button.title;
                    return (
                        <Button
                            disabled={loadingButton !== null}
                            key={button.title}
                            onClick={button.onClick}
                            className={cn("cursor-pointer", button.className)}
                        >
                            {isLoading ? <Icon name={'Loader2'} className="animate-spin mr-1" /> : <Icon name={button.icon} className="mr-1" />}
                            {button.title}
                        </Button>
                    );
                })}
            </div>
            <div className="flex items-center space-x-4">
                <ModeToggle />
                <ProfileMenu />
            </div>
        </div>
    )
}
