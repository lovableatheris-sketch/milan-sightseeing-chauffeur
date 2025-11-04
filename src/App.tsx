import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TouristTours from "./pages/TouristTours";
import HourlyDisposal from "./pages/HourlyDisposal";
import Transfers from "./pages/Transfers";
import LongDistance from "./pages/LongDistance";
import Tariffs from "./pages/Tariffs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tours" element={<TouristTours />} />
            <Route path="/disposicoes" element={<HourlyDisposal />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/viagens-longas" element={<LongDistance />} />
            <Route path="/tarifas" element={<Tariffs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
