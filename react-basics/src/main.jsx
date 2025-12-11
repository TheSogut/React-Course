import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  return (
    <>
      <Header />
      <ProductList />
    </>
  )
}

function Header(){
  return <h1>Header</h1>
}


function ProductList() {
  return (
    <>
    <h2>Product List</h2>
    <Product/>
    <Product/>
    <Product/>
    </>
  )
}

function Product(){
  const imageUrl = "1.jpg";
  const title = "IPhone 16";
  const description = "Lorem ipsum dolor sit amet consectetur.";
  const price = 80000

  const productItem = {
    "image" : "1.jpg",
    "title" : "IPhone 16",
    "description" : "Lorem ipsum dolor sit amet consectetur.",
    "price" : 80000
  }

  return (
    <div>
      <img src={"/img/" + productItem.image} alt="" />
      <h2>{productItem.title}</h2>
      <p>{productItem.description}</p>
      <span>{productItem.price}</span>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
