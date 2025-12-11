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
  return <h2>Product List</h2>
}

function Product(){
  return <h3>Product</h3>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
