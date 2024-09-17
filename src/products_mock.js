const products = [
  { id: 1, name: "Cafe finca Monte Verde", description: "Cafe bourbon en grano, de tono alto, rico en chocolate.", stock: 10, price: "15", img: "/images/el_sal_monteverde.webp" },
  { id: 2, name: "Cafe finca Los Cipreses", description: "Cafe pacamara en grano, de tono alto, rico en tonos frutales.", stock: 15, price: "20", img: "/images/el_sal_monteverde.webp" },
  { id: 3, name: "Cafe finca El Rocio", description: "Cafe Anacafe 14 en grano, de tono alto, rico en tonos frutales.", stock: 25, price: "15", img: "/images/el_sal_monteverde.webp"},
  { id: 4, name: "Blend El Salvador - Brasil", description: "Cafe Blend en grano, de tono alto, rico en tonos frutales.", stock: 5, price: "20", img: "https://speedwellcoffee.com/cdn/shop/products/COLD-BREW_240x.png"}
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = products;
      if (data) {
        resolve(data);
      } else {
        reject(new Error("Could not retrieve products data"));
      }
    }, 100)
  })
}

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = products.find((product) => product.id === parseInt(id));
      if (data) {
        resolve(data);
      } else {
        reject(new Error("Could not find any product with specified id"));
      }
    }, 100);
  });
};
