
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Shield, Users, Calendar, TrendingUp, Settings, AlertCircle } from "lucide-react";
import GlassCard from "@/components/ui-components/GlassCard";

const mockEventData = [
  { name: "Jan", pending: 4, approved: 8, rejected: 2 },
  { name: "Feb", pending: 3, approved: 10, rejected: 1 },
  { name: "Mar", pending: 5, approved: 12, rejected: 3 },
  { name: "Apr", pending: 2, approved: 15, rejected: 0 },
  { name: "May", pending: 6, approved: 9, rejected: 2 },
  { name: "Jun", pending: 4, approved: 11, rejected: 1 },
];

const mockUserData = [
  { name: "Jan", customers: 120, artists: 30, managers: 10 },
  { name: "Feb", customers: 150, artists: 35, managers: 12 },
  { name: "Mar", customers: 180, artists: 40, managers: 15 },
  { name: "Apr", customers: 210, artists: 45, managers: 18 },
  { name: "May", customers: 250, artists: 50, managers: 20 },
  { name: "Jun", customers: 280, artists: 55, managers: 22 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  const pendingEvents = 12;
  const totalUsers = 523;
  const totalEvents = 87;
  const recentReports = 3;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={() => navigate("/")}>Back to Home</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Events</p>
              <h3 className="text-2xl font-bold">{pendingEvents}</h3>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <h3 className="text-2xl font-bold">{totalUsers}</h3>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Events</p>
              <h3 className="text-2xl font-bold">{totalEvents}</h3>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recent Reports</p>
              <h3 className="text-2xl font-bold">{recentReports}</h3>
            </div>
          </div>
        </GlassCard>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="events">Event Management</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Event Approval Statistics</CardTitle>
              <CardDescription>Monthly overview of event statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockEventData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pending" fill="#8884d8" name="Pending" />
                  <Bar dataKey="approved" fill="#82ca9d" name="Approved" />
                  <Bar dataKey="rejected" fill="#ff8042" name="Rejected" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Events waiting for your review</CardDescription>
              </CardHeader>
              <CardContent>
                <p>12 events pending approval</p>
                <Button className="mt-4">Review Pending Events</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest event management activities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Comedy Night approved - 2 hours ago</li>
                  <li>Stand-up Workshop rejected - 5 hours ago</li>
                  <li>Improv Show approved - 1 day ago</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Monthly user registration by type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockUserData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="customers" fill="#8884d8" name="Customers" />
                  <Bar dataKey="artists" fill="#82ca9d" name="Artists" />
                  <Bar dataKey="managers" fill="#ff8042" name="Location Managers" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Manage Users</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Role Assignment</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Manage Roles</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>User Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Reports</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>Overall platform performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12">Analytics dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Admin Settings</CardTitle>
              <CardDescription>Manage platform configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Platform Maintenance Mode</h4>
                    <p className="text-sm text-muted-foreground">Temporarily disable the platform for maintenance</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Configure system email notifications</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Security Settings</h4>
                    <p className="text-sm text-muted-foreground">Manage platform security options</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
