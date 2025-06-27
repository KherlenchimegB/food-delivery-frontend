"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  return (
    <div className=" flex w-screen">
      <div className="w-1/3 flex items-center justify-center">
        <Card className="w-full max-w-sm border">
          <CardHeader>
            <CardTitle className="mt-[30px] text-[24px]">
              Create your account
            </CardTitle>
            <CardDescription>
              Sign up to explore your favorite dishes.
            </CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Sign up to explore your favorite dishes."
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a> */}
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full bg-gray-400">
              Let's Go
            </Button>
            <div className="flex items-center">
              <span>Already have an account?</span>
              <Button variant="link">Log in</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="flex w-full items-center justify-center ">
        <img
          src="./signin-home.png"
          alt="homepicture"
          className=" h-full rounded-md"
        />
      </div>
    </div>
  );
}
