import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

const HospitalManagementUI = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full border border-gray-300" />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1603415528371-52d26a5b4b18?w=800&dpr=2&q=80" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-lg font-semibold mb-2">Welcome David Anderson</h2>
              <p className="text-sm text-gray-600 mb-4">To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.</p>
              <div className="grid grid-cols-3 gap-4">
                <Badge variant="outline" className="flex items-center justify-center py-2 px-4 rounded-lg bg-white shadow">
                  <span className="font-semibold text-sm">105</span>
                  <span className="text-xs text-gray-500 ml-2">Appointments Today</span>
                </Badge>
                <Badge variant="outline" className="flex items-center justify-center py-2 px-4 rounded-lg bg-white shadow">
                  <span className="font-semibold text-sm">40</span>
                  <span className="text-xs text-gray-500 ml-2">Urgent Resolve</span>
                </Badge>
                <Badge variant="outline" className="flex items-center justify-center py-2 px-4 rounded-lg bg-white shadow">
                  <span className="font-semibold text-sm">37</span>
                  <span className="text-xs text-gray-500 ml-2">Available Doctors Today</span>
                </Badge>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Today's Doctors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Dr. James Wilson", "Dr. Eric Rodriguez", "Dr. Lora Wallace"].map((doctor, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <AspectRatio ratio={1}>
                        <img
                          src={`https://images.unsplash.com/photo-1603415528371-52d26a5b4b18?w=800&dpr=2&q=80&fit=crop&crop=faces&ixid=${index}`}
                          alt={doctor}
                          className="rounded-t-lg object-cover"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{doctor}</CardTitle>
                      <CardDescription>Orthopedic</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="text-xs">10:30 am to 3:30 pm</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <Calendar
                mode="single"
                selected={new Date()}
                onSelect={() => {}}
                className="rounded-md border"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Appointments</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-100 rounded-lg">
                  <h4 className="text-sm font-semibold">Geoffrey Burke</h4>
                  <p className="text-xs text-gray-600">Consultation with Dr. Kerry Marshall</p>
                  <p className="text-xs text-gray-600">9:00 am to 9:20 am</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg">
                  <h4 className="text-sm font-semibold">Harold Manning</h4>
                  <p className="text-xs text-gray-600">Follow up with Dr. Janine Holmes</p>
                  <p className="text-xs text-gray-600">9:30 am to 9:55 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-600">Hospital Management System © 2023</p>
      </footer>
    </div>
  );
};

export default HospitalManagementUI;