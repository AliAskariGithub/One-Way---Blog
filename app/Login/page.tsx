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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const login = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <center className="flex justify-center items-center h-max container animate-slide-bottom">
        <Tabs
          defaultValue="account"
          className="relative bottom-10 top-52 shadow-xl flex-col h-full"
        >
          <TabsList className="grid grid-cols-2 bg-black space-x-2 justify-center items-center ">
            <TabsTrigger
              value="account"
              className="text-white shadow-xl bg-black"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className=" text-white shadow-xl bg-black"
            >
              Password
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="w-fit h-fit shadow-xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Login</CardTitle>
                <CardDescription>
                  Make sure you already have an account. If you don&apos;t have
                  an account{" "}
                  <Link
                    href={"/SignUp"}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Click Me.
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1 text-left">
                  <Label htmlFor="username" className="text-base font-bold">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="space-y-1 text-left pb-5">
                  <Label htmlFor="name" className="text-base font-bold">
                    Email
                  </Label>
                  <Input
                    id="name"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Link href={"/"}>
                  <Button>
                    <IoArrowBack /> Back
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="password" className="w-fit h-fit shadow-xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold ">Password</CardTitle>
                <CardDescription>
                  Enter your Password to Login. If You don&apos;t have an
                  account{" "}
                  <Link
                    href={"/SignUp"}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Click Me.
                  </Link>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="space-y-1 text-left">
                  <Label htmlFor="username" className="text-base font-bold">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="************"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <Label htmlFor="password" className="text-base font-bold">
                    Confirm Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="************"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </center>
    </div>
  );
};

export default login;
