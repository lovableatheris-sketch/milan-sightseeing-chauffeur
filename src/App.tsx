import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";



import Contact from "./pages/Contact";
import MilanoPremiumMobility from "./pages/MilanoPremiumMobility";
import MilanoTariffe from "./pages/MilanoTariffe";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/milano-premium-mobility" element={<MilanoPremiumMobility />} />
            <Route path="/milano-prontuario-tariffe" element={<MilanoTariffe />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/termini-condizioni" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
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
