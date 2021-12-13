import { parseRequestUrl } from "../apis/utils.js";

const Navbar = {
  after_render: () => {
    document
      .getElementById("search-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchKeyword = document.getElementById("search-input").value;
        document.location.hash = `/?q=${searchKeyword}`;
      });

    document
      .getElementById("aside-open-button")
      .addEventListener("click", async () => {
        document.getElementById("aside-container").classList.add("open");
      });
  },
  render: () => {
    const { value } = parseRequestUrl();

    return `
        <div class="brand">
        <button id="aside-open-button">
             &#9776;
        </button>
        <a href="/#/">BSALE</a>
        </div>
        <div class="search">
        <form class="search-form"  id="search-form">
        <input type="text" name="search-input" id="search-input" value="${
          value || ""
        }" /> 
        <button type="submit"><i class="fa fa-search"></i></button>
        </form>        
        </div>
        <div>
            `;
  },
};

export default Navbar;
