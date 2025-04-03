import React from "react";
import {WhatsAppWidget} from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsAppButton = () => {
    return (
        <div style={{ zIndex: 9999, position: 'fixed', bottom: '20px', right: '20px' }}>
            <WhatsAppWidget
                phoneNumber="8501059067"  
                companyName="VM Group Europe Ltd"
                message="Hello! How can we assist you?"
                replyTimeText="Typically replies within a few hours"
            />
        </div>
    );
};

export default WhatsAppButton;
