"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Signup = () => {
    
    return (
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
            <CardDescription>Enter your email and password to Register to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="FirstName">First Name</Label>
                <Input id="FirstName" type="text" placeholder="Enter Your First Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="LastName">Last Name</Label>
                <Input id="LastName" type="text" placeholder="Enter Your Last Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Rigester
              </Button>
            </div>
          </CardContent>
        </Card>
      )
}

export default Signup