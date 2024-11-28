

import { Plus, Trash2, ChevronDown, Edit } from "lucide-react";

import { Header } from "@/components/ui/header";
import { StatsCard } from "@/components/statsCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

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

export function Tasks() {
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set());

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case 1:
        return "bg-red-500";
      case 3:
        return "bg-yellow-500";
      case 5:
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "todo":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const toggleTask = (taskId: string) => {
    const newSelected = new Set(selectedTasks);
    if (newSelected.has(taskId)) {
      newSelected.delete(taskId);
    } else {
      newSelected.add(taskId);
    }
    setSelectedTasks(newSelected);
  };

  const toggleAll = () => {
    if (selectedTasks.size === tasks.length) {
      setSelectedTasks(new Set());
    } else {
      setSelectedTasks(new Set(tasks.map((task) => task.id)));
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container mx-auto">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-4">
                <Button variant="default">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
                <Button variant="destructive" color="red">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Deleted Selected
                </Button>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[140px] justify-between"
                      >
                        Sort
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[140px]">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Start time: ASC</DropdownMenuItem>
                      <DropdownMenuItem>Start time: DESC</DropdownMenuItem>
                      <DropdownMenuItem>End time: ASC</DropdownMenuItem>
                      <DropdownMenuItem>End time: DESC</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[140px] justify-between"
                      >
                        Priority
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[140px]">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>1</DropdownMenuItem>
                      <DropdownMenuItem>2</DropdownMenuItem>
                      <DropdownMenuItem>3</DropdownMenuItem>
                      <DropdownMenuItem>4</DropdownMenuItem>
                      <DropdownMenuItem>5</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[140px] justify-between"
                      >
                        Status:
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[140px]">
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Pending</DropdownMenuItem>
                      <DropdownMenuItem>Finished</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <div className="rounded-lg border">
              <Table>
                {" "}
                <TableHeader>
                  {" "}
                  <TableRow>
                    {" "}
                    <TableHead className="w-12">
                      {" "}
                      <Checkbox
                        checked={selectedTasks.size === tasks.length}
                        onCheckedChange={toggleAll}
                        aria-label="Select all tasks"
                      />
                    </TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead className="w-12">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {" "}
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedTasks.has(task.id)}
                          onCheckedChange={() => toggleTask(task.id)}
                          aria-label={`Select task ${task.id}`}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{task.id}</TableCell>
                      <TableCell>{task.task}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${getStatusColor(
                            task.status
                          )} text-white`}
                        >
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getPriorityColor(
                            task.priority
                          )} text-white`}
                        >
                          {task.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{task.timeLapsed}</TableCell>
                      <TableCell>{task.timeToFinish}</TableCell>
                      <TableCell>{2}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => console.log(`Edit task ${task.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit task {task.id}</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
