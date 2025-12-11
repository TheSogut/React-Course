import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize: "30px",
    textTransform: "uppercase",
  };
  return <h1 style={style}>header</h1>;
}

function ProductList() {
  const items = [
    {
      image: "1.jpg",
      title: "IPhone 16",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: 80000,
      is_active: false,
    },
    {
      image: "2.jpg",
      title: "IPhone 17",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: 90000,
      is_active: true,
    },
    {
      image: "3.jpg",
      title: "IPhone 18",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: 100000,
      is_active: true,
    },
    {
      image: "4.jpg",
      title: "IPhone 19",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: 110000,
      is_active: true,
    },
  ];

  // const items = [];

  return (
    <>
      <h2 className="title">Product List</h2>
      {items.length > 0 ? (
        <div id="product-list">
          {items.map((item, index) => (
            <Product key={index} productObj={item} />
          ))}
        </div>
      ) : (
        <p>Şu anda satışta olan ürünümüz yok</p>
      )}
    </>
  );
}

function Product({ productObj }) {
  if (!productObj.is_active) return null;
  return (
    <div>
      <img src={"/img/" + productObj.image} alt="" />
      <h2>{productObj.title}</h2>
      <p>{productObj.description}</p>
      <span
        className={`f20 ${productObj.price < 100000 ? "discount" : "price"}`}
      >
        {productObj.price}
      </span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <p>Akşam {closeHour}' e kadar sipariş verebilirsiniz.</p>
      ) : (
        <p>Şuan kapalıyız. Açılış saatimiz : {openHour}</p>
      )}
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
