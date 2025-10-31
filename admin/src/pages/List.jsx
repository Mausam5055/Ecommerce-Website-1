import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [listProducts, setListProducts] = useState([]);

  const fetchListProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setListProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.info(response.data.message);
        await fetchListProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center py-1 px-2 border bg-gray-200 text-xl text-center">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Category</b>
          <b>Sub Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* Display Products */}
        {listProducts.map((item, index) => (
          <div
            className="grid grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr_0.5fr_0.2fr] md:grid-cols-[0.5fr_1fr_1.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center gap-2 py-1 px-2 border text-sm text-center"
            key={index}
          >
            <img className="w-12" src={item.image[0]} alt="Product Image" />
            <p className="text-left">{item.name}</p>
            <p className="text-left">{item.description}</p>
            <p>{item.category}</p>
            <p>{item.subCategory}</p>
            <p>{currency(item.price)}</p>
            <p
              onClick={() => removeProduct(item._id)}
              className="font-bold text-center text-gray-800 bg-red-500 rounded-full cursor-pointer md:text-center max-w-7"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
