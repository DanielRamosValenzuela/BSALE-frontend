import { getProductsById } from "../apis/api.js";
import { parseRequestUrl } from "../apis/utils.js";

const ProductsById = {
  render: async () => {
    const request = parseRequestUrl();

    const productsList = await getProductsById(request.id);
    if (productsList.error) {
      return `<div class="error">${products.error}</div>`;
    }

    const products = productsList.data;

    return `
 
   
          <ul class="products">
            ${products
              .map(
                (product) => `
            <li>
              <div class="product">
                  <img src="${product.url_image}" alt="${product.name}" />      
              <div class="product-name">
                <a href="/">
                  ${product.name}
                </a>
              </div>
           
              ${
                !!product.discount
                  ? `
                <div class="product-price">
                  <strong>$${product.price}</strong>
                  <br/>
                   $${product.price - product.discount}
      
                </div>
                `
                  : `
                <div class="product-pricet">
                  $${product.price}
                </div>
                `
              }
              </div>
            </li>
            `
              )
              .join("\n")}
          `;
  },
};
export default ProductsById;
