
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadCloud, Calendar, Clock, MapPin, Users, Plus, Mic } from "lucide-react";
import GlassCard from "@/components/ui-components/GlassCard";

const mockEvents = [
  {
    id: 1,
    title: "Stand-up Comedy Night",
    date: "July 15, 2023",
    time: "8:00 PM",
    venue: "Comedy Club Downtown",
    status: "approved",
    attendees: 120
  },
  {
    id: 2,
    title: "Improv Workshop",
    date: "July 22, 2023",
    time: "5:00 PM",
    venue: "Laugh Factory West",
    status: "pending",
    attendees: 0
  },
  {
    id: 3,
    title: "Comedy Battle",
    date: "July 29, 2023",
    time: "7:30 PM",
    venue: "Giggle Room",
    status: "rejected",
    attendees: 0
  }
];

const ArtistDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");

  // Count events by status
  const approvedEvents = mockEvents.filter(event => event.status === "approved").length;
  const pendingEvents = mockEvents.filter(event => event.status === "pending").length;
  const totalAttendees = mockEvents.reduce((acc, event) => acc + event.attendees, 0);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Artist Dashboard</h1>
        <Button variant="outline" onClick={() => navigate("/")}>Back to Home</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Approved Events</p>
              <h3 className="text-2xl font-bold">{approvedEvents}</h3>
            </div>
          </div>
        </GlassCard>
        
        <GlassCard className="p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Approvals</p>
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
              <p className="text-sm text-muted-foreground">Total Attendees</p>
              <h3 className="text-2xl font-bold">{totalAttendees}</h3>
            </div>
          </div>
        </GlassCard>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="events">My Events</TabsTrigger>
          <TabsTrigger value="submit">Submit Event</TabsTrigger>
          <TabsTrigger value="profile">Artist Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Event Management</h2>
            <Button onClick={() => setActiveTab("submit")}>
              <Plus className="mr-2 h-4 w-4" />
              Create New Event
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockEvents.map(event => (
              <Card key={event.id} className={
                event.status === "approved" ? "border-green-500 border-2" :
                event.status === "pending" ? "border-yellow-500 border-2" :
                "border-red-500 border-2"
              }>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <div className={`px-2 py-1 rounded text-xs uppercase font-bold ${
                      event.status === "approved" ? "bg-green-100 text-green-800" :
                      event.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {event.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.date}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.venue}
                    </div>
                    {event.status === "approved" && (
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        {event.attendees} Attendees
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  {event.status === "approved" && (
                    <Button variant="outline" size="sm">View Details</Button>
                  )}
                  {event.status === "pending" && (
                    <Button variant="outline" size="sm">Edit Submission</Button>
                  )}
                  {event.status === "rejected" && (
                    <Button variant="outline" size="sm">Resubmit</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="submit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Event</CardTitle>
              <CardDescription>Fill out the form to request a new event at a venue</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Title</label>
                    <Input placeholder="e.g., Comedy Night Special" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standup">Stand-up Comedy</SelectItem>
                        <SelectItem value="improv">Improv Show</SelectItem>
                        <SelectItem value="sketch">Sketch Comedy</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="openmic">Open Mic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Venue</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select venue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="venue1">Comedy Club Downtown</SelectItem>
                        <SelectItem value="venue2">Laugh Factory West</SelectItem>
                        <SelectItem value="venue3">Giggle Room</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date & Time</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="date" />
                      <Input type="time" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Description</label>
                  <Textarea placeholder="Describe your event in detail..." rows={4} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Upload Media</label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <UploadCloud className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your high-resolution images or promotional videos here
                    </p>
                    <Button variant="outline" size="sm">Browse Files</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Requirements</label>
                  <Textarea placeholder="List any special requirements or equipment needed..." rows={2} />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setActiveTab("events")}>Cancel</Button>
              <Button>Submit for Approval</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Artist Profile</CardTitle>
              <CardDescription>Manage your public profile details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-muted rounded-full p-8 relative">
                    <Mic className="h-8 w-8 text-primary" />
                    <Button variant="outline" size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium">Profile Image</h3>
                    <p className="text-sm text-muted-foreground">Upload a high-quality photo of yourself</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Stage Name</label>
                    <Input placeholder="e.g., Funny McComedy" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Comedy Style</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="observational">Observational</SelectItem>
                        <SelectItem value="improv">Improv</SelectItem>
                        <SelectItem value="dark">Dark Comedy</SelectItem>
                        <SelectItem value="physical">Physical Comedy</SelectItem>
                        <SelectItem value="satire">Satire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea placeholder="Tell audiences about yourself and your comedy style..." rows={4} />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Social Media Links</label>
                    <div className="space-y-2">
                      <Input placeholder="Instagram URL" />
                      <Input placeholder="Twitter URL" />
                      <Input placeholder="TikTok URL" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Portfolio Media</label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <UploadCloud className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload video clips or images of your performances
                      </p>
                      <Button variant="outline" size="sm">Browse Files</Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArtistDashboard;
