import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import LoadingScreen from './Components/LoadingScreen';
import { ErrorBoundary } from 'react-error-boundary';
import ProjectImageGallery from './pages/ProjectImages';
import {Toaster} from "@/components/ui/toaster"
import { NotFound } from './pages/NotFound';

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);   
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (!showContent) {
    return null;
  }

  return (
    <div
      className="app-content"
      style={{
        opacity: showContent ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <Toaster />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-gallery/:id" element={<ProjectImageGallery />} /> 
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary fallback={<div>Something went wrong. Please refresh.</div>}>
        <AppWrapper />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
