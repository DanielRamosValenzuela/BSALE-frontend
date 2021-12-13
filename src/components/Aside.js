import { getCategory } from "../apis/api";

const Aside = {
  after_render: async () => {
    document.getElementById("aside-container").classList.remove("open");
    document
      .getElementById("aside-close-button")
      .addEventListener("click", async () => {
        document.getElementById("aside-container").classList.remove("open");
      });
  },

  render: async () => {
    const categories = await getCategory();

    if (categories.error || !categories) {
      return `<div>Error al obtener la data</div>`;
    }
    return `
     <div class="aside-header">
      <div>Categorías</div>
      <button class="aside-close-button" id="aside-close-button"><i class="far fa-times-circle"></i></button>
    </div>
    <div class="aside-body">
      <ul class="categories">
      <li>
          <a href="/" id="cat.name">
            Todos los productos
        
          </a>
          </li> 
      
         ${categories
           .map(
             (cat) =>
               `
            <li>
                <a href="/#/product/${cat.id}" id="cat.name">
                ${cat.name}
              
                </a>
            </li> 
            `
           )
           .join("\n")}
    
        </li>
        
      </ul>
    </div>`;
  },
};

export default Aside;
