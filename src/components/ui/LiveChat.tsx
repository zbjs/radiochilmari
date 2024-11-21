import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Load Facebook SDK for Messenger
    const loadFacebookMessenger = () => {
      // Create a script tag to load the SDK
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadFacebookMessenger();
  }, []);

  return (
    <>
      <div id="fb-root"></div>

      {/* Facebook Messenger Chat Plugin */}
      <div
        className="fb-customerchat"
        // attribution="setup_tool"
        // page_id="your-facebook-page-id"  // Replace with your Facebook Page ID
        // theme_color="#0084ff"
        // logged_in_greeting="Hi! How can we help you?"
        // logged_out_greeting="Goodbye! See you again soon."
      ></div>
    </>
  );
};

export default LiveChat;
