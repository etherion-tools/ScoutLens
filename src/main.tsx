import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './components/Popup'; // Assuming Popup.tsx is in src/components/
// import './index.css'; // If you have global styles for the popup app

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element. Popup cannot be rendered.');
}
