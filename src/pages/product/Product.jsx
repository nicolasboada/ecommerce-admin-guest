import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { useEffect, useState } from "react";
import { productList } from "../../GuestData";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({})
  const [updatedProduct, setUpdatedProduct] = useState({})

  useEffect(() => {
    const LocalStorageDataProducts = localStorage.getItem("LocalStorageDataProducts")
    if (LocalStorageDataProducts) {
      setProduct(JSON.parse(LocalStorageDataProducts).find(product => product._id === productId))
    } else{
      setProduct(productList.find((product) => product._id === productId))
    }

  }, [productId])

  useEffect(() => {
    setUpdatedProduct(product)
  }, [product])

  const handleUpdate = (e,id, product) => {
    e.preventDefault();
    const LocalStorageDataProducts = localStorage.getItem("LocalStorageDataProducts")
    if (LocalStorageDataProducts) {
      const products = JSON.parse(LocalStorageDataProducts)
      products[products.findIndex((product) => product._id === productId)] = product
      localStorage.setItem("LocalStorageDataProducts", JSON.stringify(products))
      setProduct(product)
    } else{
      setProduct(product)
    }
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <span className="productUpdateTitle">Edit</span>
            <label>Product Name</label>
            <input type="text" placeholder={product.title} value={updatedProduct.title} onChange={(e)=>setUpdatedProduct({...updatedProduct, title: e.target.value})}/>
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} value={updatedProduct.desc} onChange={(e)=>setUpdatedProduct({...updatedProduct, desc: e.target.value})}/>
            <label>Product Image url</label>
            <input type="text" placeholder={product.img} value={updatedProduct.img} onChange={(e)=>setUpdatedProduct({...updatedProduct, img: e.target.value})}/>
            <label>Price</label>
            <input type="text" placeholder={product.price} value={updatedProduct.price} onChange={(e)=>setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
            <label>In Stock</label>
            <select name="inStock" id="idStock" value={updatedProduct.inStock} onChange={(e)=>setUpdatedProduct({...updatedProduct, inStock: e.target.value})}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
              <img src={product.img} alt="" className="productImg" />
            <button className="productButton" onClick={(e)=>handleUpdate(e,product._id, updatedProduct)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
