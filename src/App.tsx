import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TouristTours from "./pages/TouristTours";
import Transfers from "./pages/Transfers";


import ChiSiamo from "./pages/ChiSiamo";
import NostriVeicoli from "./pages/NostriVeicoli";
import CalcoloPreventivo from "./pages/CalcoloPreventivo";
import Contact from "./pages/Contact";

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
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/nostri-veicoli" element={<NostriVeicoli />} />
            <Route path="/calcolo-preventivo" element={<CalcoloPreventivo />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/tours" element={<TouristTours />} />
            <Route path="/transfers" element={<Transfers />} />
            
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
