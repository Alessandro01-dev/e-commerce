const fs = require('fs');
const path = require('path');
const products = require('./productsDataWithoutDeals.js'); 

const convertData = () => {

  let updatedProducts = JSON.parse(JSON.stringify(products));

  updatedProducts = updatedProducts.map(p => ({
    ...p,
    onSale: false,
    discountPrice: null
  }));

  const indices = new Set();
  while(indices.size < 50) {
    indices.add(Math.floor(Math.random() * updatedProducts.length));
  }

  indices.forEach(index => {
    const p = updatedProducts[index];
    p.onSale = true;

    const discountPercent = Math.random() * (0.4 - 0.1) + 0.1;
    p.discountPrice = Math.round(p.price * (1 - discountPercent) * 100) / 100;
  });

  const content = `const products = ${JSON.stringify(updatedProducts, null, 2)};\n\nmodule.exports = products;`;
  
  fs.writeFileSync(path.join(__dirname, 'productsWithDeals.js'), content);
  
  console.log("Fatto! Creato 'productsWithDeals.js' con 50 prodotti in offerta.");
};

convertData();