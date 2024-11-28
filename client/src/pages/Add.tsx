import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Add() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Add new Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Name of the Task" />
            </div>
            <div className="flex flex-row  justify-between">

            <div className="flex flex-col space-y-1.5 w-1/3">
              <Label htmlFor="priority">Priority</Label>
              <Select>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 w-1/2">
              <Label htmlFor="status">Status</Label>
                <Select>
                    <SelectTrigger id="status">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Finished">Finished</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <Label htmlFor="startTime">Start time</Label>
                    <Input id="startTime" type="date" />
                </div>
                <div >
                    <Label htmlFor="endTime">End time</Label>
                    <Input id="endTime" type="date" />
                </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-start gap-8">
        <Button variant="default">Add</Button>
        <Button variant="destructive">Cancel</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
