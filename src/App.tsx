
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VenueDashboard from "./pages/VenueDashboard";
import ComedianDashboard from "./pages/ComedianDashboard";
import AudienceDashboard from "./pages/AudienceDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LocationManagerDashboard from "./pages/LocationManagerDashboard";
import ArtistDashboard from "./pages/ArtistDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/venue-dashboard" element={<VenueDashboard />} />
          <Route path="/comedian-dashboard" element={<ComedianDashboard />} />
          <Route path="/audience-dashboard" element={<AudienceDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/location-dashboard" element={<LocationManagerDashboard />} />
          <Route path="/artist-dashboard" element={<ArtistDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
