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
import ScrollToTop from "./components/ScrollToTop";
import SideAds from "./components/SideAds";


import ChiSiamo from "./pages/ChiSiamo";
import NostriVeicoli from "./pages/NostriVeicoli";
import CalcoloPreventivo from "./pages/CalcoloPreventivo";
import Contact from "./pages/Contact";
import MilanoPremiumMobility from "./pages/MilanoPremiumMobility";
import MilanoTariffe from "./pages/MilanoTariffe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/nostri-veicoli" element={<NostriVeicoli />} />
            <Route path="/calcolo-preventivo" element={<CalcoloPreventivo />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/tours" element={<TouristTours />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/milano-premium-mobility" element={<MilanoPremiumMobility />} />
            <Route path="/milano-prontuario-tariffe" element={<MilanoTariffe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/termini-condizioni" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
        <SideAds />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
