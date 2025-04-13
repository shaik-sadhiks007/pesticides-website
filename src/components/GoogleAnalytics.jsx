import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, pageview, event } from '../utils/analytics';

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
      // Send initial pageview
      pageview();
      // Log initialization
      event("System", "Initialize");
    }
  }, []);

  useEffect(() => {
    // Send pageview on route change
    pageview();
  }, [location.pathname]);

  return null;
}

export default GoogleAnalytics; 