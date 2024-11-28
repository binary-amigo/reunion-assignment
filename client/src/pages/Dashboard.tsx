import { CheckCircle2, Plus, ChevronDown, Timer, Clock } from "lucide-react";

import { Header } from "@/components/ui/header";
import { StatsCard } from "@/components/statsCard";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Task {
  id: string;
  task: string;
  priority: number;
  pendingTasks: number;
  timeLapsed: string;
  timeToFinish: string;
  status?: "completed" | "in-progress" | "todo";
}

const tasks: Task[] = [
    {
        id: "1",
        task: "Website Redesign",
        priority: 1,
        pendingTasks: 5,
        timeLapsed: "2d 5h",
        timeToFinish: "1d 3h",
    },
    {
        id: "2",
        task: "Content Updates",
        priority: 3,
        pendingTasks: 3,
        timeLapsed: "1d 2h",
        timeToFinish: "5h",
    },
    {
        id: "3",
        task: "Bug Fixes",
        priority: 1,
        pendingTasks: 8,
        timeLapsed: "3d 7h",
        timeToFinish: "2d",
    },
    {
        id: "4",
        task: "Documentation",
        priority: 5,
        pendingTasks: 2,
        timeLapsed: "5h",
        timeToFinish: "3h",
    },
].sort((a, b) => a.priority - b.priority);

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container mx-auto">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[140px] justify-between"
                    >
                      All Tasks
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[140px]">
                    <DropdownMenuLabel>Filter Tasks</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>All Tasks</DropdownMenuItem>
                    <DropdownMenuItem>Active</DropdownMenuItem>
                    <DropdownMenuItem>Completed</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>
            </div>
            <div>Summary</div>
            <StatsCard
              totalTasks={tasks.length}
              completedTasks={
                tasks.filter((t) => t.status === "completed").length
              }
              inProgressTasks={
                tasks.filter((t) => t.status === "in-progress").length
              }
            />
            <div>Pending Summary</div>
            <StatsCard
              totalTasks={tasks.length}
              completedTasks={
                tasks.filter((t) => t.status === "completed").length
              }
              inProgressTasks={
                tasks.filter((t) => t.status === "in-progress").length
              }
            />

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[150px]">Task</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead className="text-right">Pending Tasks</TableHead>
                    <TableHead className="text-right">Time Lapsed</TableHead>
                    <TableHead className="text-right">Time to Finish</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.task}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            task.priority === 1
                              ? "destructive"
                              : task.priority === 3
                              ? "default"
                              : "secondary"
                          }
                          className="w-20 justify-center"
                        >
                          {task.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                          {task.pendingTasks}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          {task.timeLapsed}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Timer className="h-4 w-4 text-muted-foreground" />
                          {task.timeToFinish}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <TaskCard 
                  key={task.id} 
                  title={task.task} 
                  description="Task description" 
                  dueDate={task.timeToFinish} 
                  status="in-progress" 
                  {...task} 
                />
              ))}
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
}
