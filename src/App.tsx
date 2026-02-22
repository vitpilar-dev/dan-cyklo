import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const France = lazy(() => import("./pages/France"));
const Spain = lazy(() => import("./pages/Spain"));
const Italy = lazy(() => import("./pages/Italy"));
const Stories = lazy(() => import("./pages/Stories"));
const Join = lazy(() => import("./pages/Join"));
const Team = lazy(() => import("./pages/Team"));
const Events = lazy(() => import("./pages/Events"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/france" element={<France />} />
            <Route path="/spain" element={<Spain />} />
            <Route path="/italy" element={<Italy />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/join" element={<Join />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/members" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
