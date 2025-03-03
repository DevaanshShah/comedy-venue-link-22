
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, Calendar, BuildingIcon, Plus } from "lucide-react";
import GlassCard from "@/components/ui-components/GlassCard";

const mockVenues = [
  {
    id: 1,
    name: "Comedy Club Downtown",
    address: "123 Main St, New York, NY",
    capacity: 200,
    events: 12,
    pending: 3
  },
  {
    id: 2,
    name: "Laugh Factory West",
    address: "456 Sunset Blvd, Los Angeles, CA",
    capacity: 150,
    events: 8,
    pending: 1
  },
  {
    id: 3,
    name: "Giggle Room",
    address: "789 Comedy Ave, Chicago, IL",
    capacity: 100,
    events: 5,
    pending: 2
  }
];

const LocationManagerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Location Manager Dashboard</h1>
        <Button variant="outline" onClick={() => navigate("/")}>Back to Home</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <BuildingIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Venues</p>
              <h3 className="text-2xl font-bold">{mockVenues.length}</h3>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Events</p>
              <h3 className="text-2xl font-bold">{mockVenues.reduce((acc, venue) => acc + venue.events, 0)}</h3>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Capacity</p>
              <h3 className="text-2xl font-bold">{mockVenues.reduce((acc, venue) => acc + venue.capacity, 0)}</h3>
            </div>
          </div>
        </GlassCard>
      </div>

      <Tabs defaultValue="venues" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="venues">My Venues</TabsTrigger>
          <TabsTrigger value="events">Event Approvals</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="venues" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Venue Management</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Venue
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockVenues.map(venue => (
              <Card key={venue.id}>
                <CardHeader>
                  <CardTitle>{venue.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {venue.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Capacity</p>
                      <p className="font-medium">{venue.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Events</p>
                      <p className="font-medium">{venue.events}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="font-medium">{venue.pending}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">Edit</Button>
                    <Button variant="default" className="flex-1">Manage</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Event Approvals</CardTitle>
              <CardDescription>Events waiting for your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Stand-up Comedy Night</h3>
                      <p className="text-sm text-muted-foreground">Comedy Club Downtown • July 15, 2023 • 8:00 PM</p>
                      <p className="text-sm mt-2">Requested by: John Comedian</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="destructive" size="sm">Reject</Button>
                      <Button variant="default" size="sm">Approve</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Improv Workshop</h3>
                      <p className="text-sm text-muted-foreground">Laugh Factory West • July 22, 2023 • 5:00 PM</p>
                      <p className="text-sm mt-2">Requested by: Sarah Improv</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="destructive" size="sm">Reject</Button>
                      <Button variant="default" size="sm">Approve</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Comedy Battle</h3>
                      <p className="text-sm text-muted-foreground">Giggle Room • July 29, 2023 • 7:30 PM</p>
                      <p className="text-sm mt-2">Requested by: Comedy Collective</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="destructive" size="sm">Reject</Button>
                      <Button variant="default" size="sm">Approve</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Venue Performance</CardTitle>
              <CardDescription>Analytics and reports for your venues</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12">Venue reports coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LocationManagerDashboard;
