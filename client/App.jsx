import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Friends from "./pages/Friends";
import Saved from "./pages/Saved";
import Memories from "./pages/Memories";
import Video from "./pages/Video";
import Events from "./pages/Events";
import Marketplace from "./pages/Marketplace";
import Gaming from "./pages/Gaming";
import Support from "./pages/Support";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/video" element={<Video />} />
          <Route path="/events" element={<Events />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/support" element={<Support />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/group/:id" element={<Groups />} />
          <Route path="/messages" element={<Messages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
