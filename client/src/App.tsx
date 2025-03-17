import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import BookOverviewPage from "./pages/BookOverviewPage";
import SDGConnectionPage from "./pages/SDGConnectionPage";
import ThematicAnalysisPage from "./pages/ThematicAnalysisPage";
import CharacterAnalysisPage from "./pages/CharacterAnalysisPage";
import QuoteShowcasePage from "./pages/QuoteShowcasePage";
import BookReviewPage from "./pages/BookReviewPage";
import ConclusionPage from "./pages/ConclusionPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage"; // Import the new About page

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/book-overview" component={BookOverviewPage} />
      <Route path="/sdg-connection" component={SDGConnectionPage} />
      <Route path="/thematic-analysis" component={ThematicAnalysisPage} />
      <Route path="/character-analysis" component={CharacterAnalysisPage} />
      <Route path="/quote-showcase" component={QuoteShowcasePage} />
      <Route path="/book-review" component={BookReviewPage} />
      <Route path="/conclusion" component={ConclusionPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} /> {/* Added About Route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
