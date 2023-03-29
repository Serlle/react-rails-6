// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// Importar las bibliotecas necesarias:
import React from "react";
import ReactDOM from "react-dom";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import Root from '../components/Root'

// Inicializar las bibliotecas:
Rails.start();
Turbolinks.start();
ActiveStorage.start();

// Support component names relative to this directory:
const componentRequireContext = require.context("components", true);
const ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext, {
});

// Renderizar los componentes en el DOM con funcion y no clase:
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root />,
    document.getElementById("Root")
  );
});

