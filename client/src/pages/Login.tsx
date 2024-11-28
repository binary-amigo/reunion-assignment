import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Login() {

  const [state, setState] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px] ">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Welcome {state === "login" ? "back" : ""} to TaskMentor!!</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="John@doe.com"  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="justify-center flex gap-8">
                <Button variant="default">
                  Guest Login
                </Button>

                <Button variant="outline" onClick={(e) => {state === "login" ? setState("signup") : setState("login"); e.preventDefault()}}>
                  {state === "login" ? "Sign Up" : "Login"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
