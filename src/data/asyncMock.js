export const productos = [
  {
    id: 1,
    nombre: "Remera Rick",
    precio: 8500,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://http2.mlstatic.com/D_NQ_NP_751255-MLA31037228606_062019-O.webp",
  },
  {
    id: 2,
    nombre: "Buzo peace among worlds",
    precio: 13000,
    categoria: "Buzos",
    stock: 5,
    descripcion:
      "Buzo Unisex 100% Algodón. Cuello Redondo con refuerzo en los cuellos y mangas",
    img: "https://http2.mlstatic.com/D_NQ_NP_835655-MLA45781466100_052021-O.webp",
  },
  {
    id: 3,
    nombre: "Pijama Rick and Morty",
    precio: 8900,
    categoria: "Pijamas",
    stock: 5,
    descripcion:
      "Los Pants son de lycra y modal calidad premium, cómodos, súper suaves, livianos y frescos para usarlos tranqui en casa o dónde quieras. Tienen cintura elastizada con con cordón regulable para ajustarlos hasta estar cómodos. La tela no encoje, los estampados no decoloran y es por eso que todas nuestras prendas cuentan con garantía de estampado.",
    img: "https://acdn.mitiendanube.com/stores/944/335/products/4181-ba681e6c1fd38d3ed816651113884723-1024-1024.jpg",
  },
  {
    id: 4,
    nombre: "Remeron Rick And Morty",
    precio: 9900,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Los remerones son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://media.nastygal.com/i/nastygal/agg04760_charcoal_xl/female-charcoal-rick-and-morty-graphic-t-shirt-dress/?w=1070&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
  },
  {
    id: 5,
    nombre: "Zapatillas",
    precio: 14900,
    categoria: "Zapatillas De Lona Pintadas A Mano Rick And Morty",
    stock: 5,
    descripcion:
      "Zapatilla de lona reforzada. Pintada a mano con pintura de calidad.",
    img: "https://http2.mlstatic.com/D_NQ_NP_958920-MLA53230449583_012023-O.webp",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};
