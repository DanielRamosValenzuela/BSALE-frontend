import HomeScreen from "./screens/HomeScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import ProductsById from "./screens/ProductsById.js";

import Navbar from "./components/Navbar.js";
import Aside from "./components/Aside.js";

import { hideLoading, parseRequestUrl, showLoading } from "./apis/utils.js";

import "./styles.css";

("use strict");

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductsById,
};

const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const header = document.getElementById("header-container");
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();

  const aside = document.getElementById("aside-container");
  aside.innerHTML = await Aside.render();
  await Aside.after_render();

  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
  hideLoading();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
