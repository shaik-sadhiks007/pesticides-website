import React from 'react';

const MapContainer = () => {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.8578646298374!2d-1.1822903!3d52.95098050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3dffa0449e9%3A0xb721bcb687e7b3ba!2sVM%20GROUP%20EUROPE%20LIMITED!5e0!3m2!1sen!2sin!4v1743844260918!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="VM GROUP EUROPE LIMITED Location"
      ></iframe>
    </div>
  );
};

export default MapContainer; 