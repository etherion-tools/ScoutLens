import { useState } from 'react';
import './Popup.css'; // Optional: if you want specific styles for the popup

const DEFAULT_COLOR = "#ffffff"; // Default to white or any color you prefer
const DEFAULT_THEME = "light";

function Popup() {
  const [selectedColor, setSelectedColor] = useState<string>(DEFAULT_COLOR);
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  const handleApplyColor = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "applyCustomBackground", color: selectedColor },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error("Error applying color:", chrome.runtime.lastError.message);
              alert("Could not apply color. Ensure the extension has permissions for this page and the page is loaded.");
              return;
            }
            if (response && response.success) {
              console.log("Background color applied successfully");
              // window.close(); // Optionally close the popup
            } else {
              console.warn("Failed to apply background color. Response:", response);
              alert("Failed to apply background color.");
            }
          }
        );
      } else {
        console.error("No active tab found to send message to.");
        alert("Cannot apply color: No active tab identified.");
      }
    });
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`popup-container ${theme}-theme`}>
      <h3>Website Background Changer</h3>
      <button onClick={handleThemeToggle} className="theme-toggle-button">
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <input 
        type="color" 
        value={selectedColor} 
        onChange={(e) => setSelectedColor(e.target.value)} 
        className="color-picker-input"
      />
      <button onClick={handleApplyColor} className="theme-toggle-button">
        Apply Background Color
      </button>
    </div>
  );
}

export default Popup;