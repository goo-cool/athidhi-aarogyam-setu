import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import MigrantLogin from "./pages/MigrantLogin";
import MigrantProfile from "./pages/MigrantProfile";
import HospitalLogin from "./pages/HospitalLogin";
import HospitalDashboard from "./pages/HospitalDashboard";
import GovernmentLogin from "./pages/GovernmentLogin";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/migrant-login" element={<MigrantLogin />} />
          <Route path="/migrant-profile" element={<MigrantProfile />} />
          <Route path="/hospital-login" element={<HospitalLogin />} />
          <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
          <Route path="/government-login" element={<GovernmentLogin />} />
          <Route path="/government-dashboard" element={<GovernmentDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
