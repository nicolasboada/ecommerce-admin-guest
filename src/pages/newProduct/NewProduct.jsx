import { useEffect, useState } from "react";
import "./newProduct.css";
import { productList } from "../../GuestData";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState({});


  const [products, setProducts] = useState([])

  useEffect(() => {
    const LocalStorageDataProducts = localStorage.getItem("LocalStorageDataProducts")
    if (LocalStorageDataProducts) {
      setProducts(JSON.parse(LocalStorageDataProducts))
    } else{
      setProducts(productList);
    }
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  
  const handleCat = (e) => {
    setCat((prev) => {
      return { ...prev, [e.target.name]: e.target.value.split(",") };
    });
  };

  const handleClick = (e) => {
    // e.preventDefault();
    const productDefault = { inStock: true};
    const product = {...productDefault, ...inputs, ...cat, _id:(+new Date()).toString(),updatedAt: new Date()};
    products.push(product)
    localStorage.setItem("LocalStorageDataProducts", JSON.stringify(products))
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleClick}>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="product title..."
            required
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            required
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Image url</label>
          <input
            name="img"
            type="text"
            placeholder="https://yoursite.com/images/image.jpg"
            required
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            required
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input name="categories" type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input name="size" type="text" placeholder="XS,S,M,L,XL" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input name="color" type="text" placeholder="red,blue" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" defaultValue={true} required onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button  className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
