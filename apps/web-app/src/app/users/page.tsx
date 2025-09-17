"use client"

import { useRouter } from "next/navigation"
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


export default function UsersPage() {
    const router = useRouter()
   

    return (
        <>
        <div className="container">
        <Card className="w-full max-w-sm mx-auto my-auto">
            <CardHeader>
                <CardTitle className="text-center"> ID number verification </CardTitle>
                <CardDescription>
                Enter your ID below to know that you are Ecuadorian.
                </CardDescription>
                <Button variant="link" className="p-0 h-auto">Verify</Button>
            </CardHeader>
            <CardContent>
                <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">ID number</Label>
                    </div>
                    <Input id="password" type="password" required />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                Verify
                </Button>
            </CardFooter>
            </Card>
               
        </div>
    
        
        </>
    )
}
