import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { productList } from "../../GuestData";

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const LocalStorageDataProducts = localStorage.getItem("LocalStorageDataProducts")
    if (LocalStorageDataProducts) {
      setProducts(JSON.parse(LocalStorageDataProducts))
    } else{
      setProducts(productList)
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("LocalStorageDataProducts", JSON.stringify(products))
  },[products])

  const handleDelete = (id) => {
    setProducts(products.filter(product => product._id !== id));

  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
      />
    </div>
  );
}
