import React from "react";
import ReactDOM from "react-dom/client";
import App from '../components/App'

// Renderizar los componentes en el DOM con funcion y no clase:
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("App")
  );
});
