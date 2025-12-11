import { items } from "../data";
import Product from "./Product";

export default function ProductList() {
  return (
    <>
      {items.length > 0 ? (
        <div
          id="product-list"
          className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4"
        >
          {items.map((item, index) => (
            <div className="col" key={index}>
              <Product productObj={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>Şu anda satışta olan ürünümüz yok</p>
      )}
    </>
  );
}
