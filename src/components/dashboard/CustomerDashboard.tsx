
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, MapPin, Search, Filter, Calendar as CalendarIcon, MapPinned } from "lucide-react";
import GlassCard from "@/components/ui-components/GlassCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockEvents = [
  {
    id: 1,
    title: "Stand-up Comedy Night",
    date: "July 15, 2023",
    time: "8:00 PM",
    venue: "Comedy Club Downtown",
    location: "New York, NY",
    genre: "Stand-up",
    artist: "John Comedian",
    price: 25,
    image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Improv Workshop",
    date: "July 22, 2023",
    time: "5:00 PM",
    venue: "Laugh Factory West",
    location: "Los Angeles, CA",
    genre: "Improv",
    artist: "Sarah Improv",
    price: 30,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Comedy Battle",
    date: "July 29, 2023",
    time: "7:30 PM",
    venue: "Giggle Room",
    location: "Chicago, IL",
    genre: "Variety",
    artist: "Comedy Collective",
    price: 20,
    image: "https://images.unsplash.com/photo-1545128485-c400ce7b6892?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Sketch Comedy Night",
    date: "August 5, 2023",
    time: "8:30 PM",
    venue: "Comedy Hub",
    location: "Austin, TX",
    genre: "Sketch",
    artist: "Funny Friends",
    price: 22,
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2fda?q=80&w=1469&auto=format&fit=crop"
  }
];

const myEvents = [
  {
    id: 101,
    title: "Late Night Comedy",
    date: "June 30, 2023",
    venue: "Laugh Factory West",
    attended: true,
    tickets: 2
  },
  {
    id: 102,
    title: "Stand-up Comedy Night",
    date: "July 15, 2023",
    venue: "Comedy Club Downtown",
    attended: false,
    tickets: 1
  }
];

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>
        <Button variant="outline" onClick={() => navigate("/")}>Back to Home</Button>
      </div>

      <Tabs defaultValue="discover" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="discover">Discover Events</TabsTrigger>
          <TabsTrigger value="my-events">My Events</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discover" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for events, comedians, or venues..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          
          {filterOpen && (
            <Card className="mb-4">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">By Date</h3>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Checkbox id="date-today" />
                        <label htmlFor="date-today" className="ml-2 text-sm">Today</label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="date-tomorrow" />
                        <label htmlFor="date-tomorrow" className="ml-2 text-sm">Tomorrow</label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="date-weekend" />
                        <label htmlFor="date-weekend" className="ml-2 text-sm">This Weekend</label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="date-week" />
                        <label htmlFor="date-week" className="ml-2 text-sm">This Week</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">By Location</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York, NY</SelectItem>
                        <SelectItem value="la">Los Angeles, CA</SelectItem>
                        <SelectItem value="chicago">Chicago, IL</SelectItem>
                        <SelectItem value="austin">Austin, TX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">By Genre</h3>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Checkbox id="genre-standup" />
                        <label htmlFor="genre-standup" className="ml-2 text-sm">Stand-up</label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="genre-improv" />
                        <label htmlFor="genre-improv" className="ml-2 text-sm">Improv</label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="genre-sketch" />
                        <label htmlFor="genre-sketch" className="ml-2 text-sm">Sketch</label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="genre-variety" />
                        <label htmlFor="genre-variety" className="ml-2 text-sm">Variety</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">By Artist</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select artist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Comedian</SelectItem>
                        <SelectItem value="sarah">Sarah Improv</SelectItem>
                        <SelectItem value="comedy">Comedy Collective</SelectItem>
                        <SelectItem value="funny">Funny Friends</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2">Reset</Button>
                  <Button>Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map(event => (
              <GlassCard key={event.id} className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.date}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.venue}, {event.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="text-muted-foreground mr-2">Genre:</div>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                        {event.genre}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="text-muted-foreground mr-2">Artist:</div>
                      {event.artist}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="font-bold">${event.price}</div>
                    <Button>Book Tickets</Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="my-events" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myEvents.map(event => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <div className={`px-2 py-1 rounded text-xs uppercase font-bold ${
                      event.attended ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {event.attended ? "Attended" : "Upcoming"}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinned className="h-4 w-4 mr-2 text-muted-foreground" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="text-muted-foreground mr-2">Tickets:</div>
                      {event.tickets}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  {event.attended ? (
                    <Button variant="outline">Leave Review</Button>
                  ) : (
                    <>
                      <Button variant="outline">View Ticket</Button>
                      <Button variant="ghost" className="text-red-500 hover:text-red-700">Cancel</Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input defaultValue="Jane" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input defaultValue="Smith" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input defaultValue="jane.smith@example.com" type="email" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input defaultValue="(555) 123-4567" type="tel" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Location</label>
                  <Select defaultValue="ny">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York, NY</SelectItem>
                      <SelectItem value="la">Los Angeles, CA</SelectItem>
                      <SelectItem value="chicago">Chicago, IL</SelectItem>
                      <SelectItem value="austin">Austin, TX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Comedy Genres</label>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center">
                      <Checkbox id="pref-standup" defaultChecked />
                      <label htmlFor="pref-standup" className="ml-2 text-sm">Stand-up</label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="pref-improv" />
                      <label htmlFor="pref-improv" className="ml-2 text-sm">Improv</label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="pref-sketch" defaultChecked />
                      <label htmlFor="pref-sketch" className="ml-2 text-sm">Sketch</label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="pref-variety" />
                      <label htmlFor="pref-variety" className="ml-2 text-sm">Variety</label>
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
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded mr-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#1A1F71" />
                        <path d="M9.5 15.5H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 04/25</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                
                <Button variant="outline" className="w-full">
                  Add New Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
