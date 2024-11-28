import { Calendar, FolderKanban, Home, Settings, Users } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <span className="text-lg">Projects</span>
          </a>
        </div>
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-2">
            <Button
              asChild
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            >
              <a href="#">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </a>
            </Button>
            <Button
              asChild
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            >
              <a href="#">
                <FolderKanban className="mr-2 h-4 w-4" />
                Projects
              </a>
            </Button>
            <Button
              asChild
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            >
              <a href="#">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </a>
            </Button>
            <Button
              asChild
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            >
              <a href="#">
                <Users className="mr-2 h-4 w-4" />
                Team
              </a>
            </Button>
            <Button
              asChild
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            >
              <a href="#">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </a>
            </Button>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

