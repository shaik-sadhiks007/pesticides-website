import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-1JYXYF98ZG';

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Track page views
export const pageview = () => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname,
    title: document.title
  });
};

// Track product views
export const trackProductView = (productName, category, subcategory) => {
  ReactGA.event({
    category: "Products",
    action: "view",
    label: `${category}/${subcategory}/${productName}`
  });
};

// Track crop program views
export const trackCropProgramView = (programName) => {
  ReactGA.event({
    category: "Crop Programs",
    action: "view",
    label: programName
  });
};

// Track user engagement
export const trackEngagement = (action, label, value = null) => {
  ReactGA.event({
    category: "Engagement",
    action,
    label,
    ...(value && { value: Math.round(value) })
  });
};

// General event tracking
export const event = (category, action, label = null, value = null) => {
  if (category && action) {
    ReactGA.event({
      category,
      action,
      ...(label && { label }),
      ...(value && { value })
    });
  }
};

// Track time spent on page
export const trackTimeSpent = (path, timeSpent) => {
  console.log('Tracking time spent:', { path, timeSpent });
  try {
    ReactGA.event({
      category: "Engagement",
      action: "time_spent",
      label: path,
      value: Math.round(timeSpent),
      nonInteraction: true,
      transport: "xhr"
    });
  } catch (error) {
    console.error('Time tracking error:', error);
  }
};

// Track user location
export const trackUserLocation = () => {
  ReactGA.event({
    category: "User",
    action: "location",
    label: window.navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    nonInteraction: true
  });
}; 