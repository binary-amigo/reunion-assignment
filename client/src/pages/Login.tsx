import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export function Login() {
  const [state, setState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.BACKEND_URL + "/" + state, {
        email,
        password,
      });

      if(state === "login") {
        if (response.status === 201) {
          const data = response.data;
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
          
        } else if(response.status === 401) {
          alert("Login failed. Please check your credentials.");
        } else {
          alert("An error occurred. Please try again.");
        }
      } else {
        if (response.status === 201) {
          const data = response.data;
          // Save token if needed
          localStorage.setItem("token", data.token);
          setState("login");
          navigate("/");
          alert("Sign up successful. Please login to continue.");
        } else if(response.status === 401) {
          alert("User already exists. Please login.");
        } else {
          alert("An error occurred. Please try again.");
        }
      }
      
      
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center text-3xl">
            Welcome {state === "login" ? "back" : ""} to TaskMentor!!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="John@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="justify-center flex gap-8">
                <Button type="button" variant="default">
                  Guest Login
                </Button>
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    setState(state === "login" ? "signup" : "login");
                  }}
                >
                  {state === "login" ? "Sign Up" : "Login"}
                </Button>
              </div>
              <Button type="submit" variant="default">
                {state === "login" ? "Login" : "Sign Up"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
