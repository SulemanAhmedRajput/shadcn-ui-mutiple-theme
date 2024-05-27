import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/custom/ThemeProvider"

export function ModeToggle() {
  const { theme,setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button >
          <div className="capitalize">
          {theme.split("-").join(" ")}
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rose-light")}>
          Rose Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rose-dark")}>
          Rose Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green-light")}>
          Green Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green-dark")}>
          Green Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange-light")}>
          Orange Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange-dark")}>
          Orange Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("violet-light")}>
          Violet Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("violet-dark")}>
          Violet Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("red-light")}>
          Red Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("red-dark")}>
          Red Dark
        </DropdownMenuItem>
      
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
