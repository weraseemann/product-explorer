import { products } from './products-data.js';

let productRepository = (function () {

    function add(product){
        products.push(product);
    }
    //return an array of products
    function getAll(){
    return products;
    }

function addListItem(product) {
let products = document.querySelector(".product-list");
products.style.listStyleType = "none"; 
let productList = document.createElement("li");
let button =document.createElement("li");
button.innerHTML = "<img src=\"" + product.Bild + "\" alt=\"" + product.Name + "\" />" + "<h3>" + product.Name + "</h3>" + "<div>" + "Kategorie: " + product.Kategorie + "<br>" + "Preis: " + product.Preis +"€" + "</div>" ;
    button.classList.add("button-class");

productList.appendChild(button); 
products.appendChild(productList);
};


//function to filter products by text
function searchProduct(searchText) {
    console.log(searchText);
    let filteredProducts = products.filter((product)=>
    product.Name.toLowerCase().includes(searchText.toLowerCase())
);
    console.log(filteredProducts, "filteredProducts");
    //Clear the current list
    document.querySelector(".product-list").innerHTML = "";

    //Add each filtered product to the list
    filteredProducts.forEach((product) => {
        addListItem(product);
    });
}


function searchProductByCategory() {
    // Get all checkboxes with class 'checkbox'
    const checkbox = document.querySelectorAll(".checkbox");
  
    // Create an array to store selected category values
    const selectedCategories = [];
    
    // Use 'checkboxes' to collect all checked values
    checkbox.forEach((checkbox) => {
      console.log(checkbox.checked)
      if (checkbox.checked) {
        selectedCategories.push(checkbox.value);
      }
    });
  console.log(selectedCategories)
    // Filter products by selected categories
    const filteredProductsByCategory =
      selectedCategories.length === 0
        ? products // if nothing selected, show all
        : products.filter((product) => {
          console.log(product.Kategorie);
          return selectedCategories.includes(product.Kategorie)}
          );
    console.log(filteredProductsByCategory)

    document.querySelector(".product-list").innerHTML = "";

    // Render the filtered products
    filteredProductsByCategory.forEach((product) => {
      addListItem(product);
    });
  }

  function searchProductByPrice() {
    // Get all checkboxes with class 'checkbox'
    const minInputElement = document.querySelector(".min-input");
    const maxInputElement = document.querySelector(".max-input");
     
    // Filter products by selected price
    const filteredProductsByPrice =
          products.filter((product) => {
          if (minInputElement.valueAsNumber <= product.Preis && product.Preis <= maxInputElement.valueAsNumber){
            return true;
          }
          
          return false;
        });
    console.log(filteredProductsByPrice)

    document.querySelector(".product-list").innerHTML = "";

    // Render the filtered products
    filteredProductsByPrice.forEach((product) => {
      addListItem(product);
    });
  }

return {
    add: add, 
    getAll: getAll,
    addListItem: addListItem,
    searchProduct: searchProduct,
    searchProductByCategory: searchProductByCategory,
    searchProductByPrice:searchProductByPrice,
}
}
)();

console.log(productRepository.getAll());

productRepository.getAll().forEach(function (product) {
    let productList = document.querySelector(".product-list");
    let listproduct = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "<img src=\"" + product.Bild + "\" alt=\"" + product.Name + "\" />" + "<h3>" + product.Name + "</h3>" + "<div>" + "Kategorie: " + product.Kategorie + "<br>" + "Preis: " + product.Preis +"€" + "</div>" ;
    button.classList.add("button-class");
    listproduct.appendChild(button);
    productList.appendChild(listproduct);
});

// Debounce 300ms
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedSearch = debounce(function (searchText) {
  productRepository.searchProduct(searchText);
}, 300); //mit Debounce 300ms 

document.getElementById("searchText").addEventListener("input", function () {
    debouncedSearch(this.value);
  });

/* document.getElementById("searchText").addEventListener("input", function () {
    productRepository.searchProduct(this.value);
  }); */

  //Checkbox-Logik
  const selectAll = document.getElementById("chbxAlle");
  const selectAuto = document.getElementById("chbxAuto");
  const selectAT = document.getElementById("chbxAutoteile");
  
  selectAll.addEventListener("change", () => {
      if (selectAll.checked){
          selectAuto.checked = true;
          selectAT.checked = true;
      } else {
          selectAuto.checked = false;
          selectAT.checked = false;
      }
  })
  
  function updateAll() {
      if (selectAuto.checked && selectAT.checked) {
          selectAll.checked  = true;
      } else {
          selectAll.checked = false;
      }
  }
  selectAuto.addEventListener("change", updateAll);
  selectAT.addEventListener("change", updateAll);

  document.querySelectorAll(".checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", productRepository.searchProductByCategory);
  });


//Price-slider

const rangeValue = document.querySelector(".slider .price-slider");
const rangeInputValue = document.querySelectorAll(".range-input input");

// Set the price gap

let priceGap = 0;

// Add event listeners
const priceInputValue = document.querySelectorAll(".price-input input");
for (let i=0; i< priceInputValue.length; i++) {
  priceInputValue[i].addEventListener("input", e => {
    let minprice = parseInt(priceInputValue[0].value);
    let maxprice = parseInt(priceInputValue[1].value);
    let diff = maxprice - minprice;
  
// min and max values
    if (minprice < 0) {
      alert("Der Mindestpreis kann nicht weniger als 0 sein.");
      priceInputValue[0].value = 0;
      minprice = 0;
    }

    if (maxprice > 200000 ) {
      alert("Der Höchstpreis kann nicht mehr als 200000 sein.");
      priceInputValue[1].value = 200000;
      maxprice = 200000;
    }
    if (maxprice <= rangeInputValue[1].max) {
      if (e.target.className ==="min-input") {
        rangeInputValue[0].value = minprice;
        let value1 = rangeInputValue[0].max;
        rangeValue.style.left = `${(minprice / value1) * 100}%`;
      } else {
         rangeInputValue[1].value = maxprice;
                let value2 = rangeInputValue[1].max;
                rangeValue.style.right = `${100 - (maxprice / value2) * 100}%`;
      }
    }
  });
 // Add event listeners to range input elements
    for (let i = 0; i < rangeInputValue.length; i++) {
        rangeInputValue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputValue[0].value);
            let maxVal = parseInt(rangeInputValue[1].value);
            
                // Update price inputs and range progress
                priceInputValue[0].value = minVal;
                priceInputValue[1].value = maxVal;
                rangeValue.style.left = `${(minVal / rangeInputValue[0].max) * 100}%`;
                rangeValue.style.right = `${100 - (maxVal / rangeInputValue[1].max) * 100}%`;
            
        });
    }

}
    document.querySelectorAll(".min-input, .max-input, .min-range, .max-range").forEach((priceSlider) => {
    priceSlider.addEventListener("change", ()=>productRepository.searchProductByPrice());
  });

  