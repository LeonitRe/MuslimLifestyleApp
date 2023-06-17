import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
  const [prd, setPrd] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    const response = await axios.get("http://localhost:5080/products");
    setPrd(response.data);
  };

  const handleDelete = async (pid) => {
    const resp = await axios.delete(`http://localhost:5080/products/${pid}`);
    toast(resp.data.msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    product();
  };
  const filteredProducts = prd.filter((p) => {
    const title = (p.name || "").toLowerCase(); // Use empty string if name is null or missing
    const query = searchQuery.toLowerCase();
    return (
      title.includes(query) && (category === "" || p.category === category)
    );
  });

  return (
    <div className="container mx-auto h-screen overflow-y-scroll">
      <h2 className="text-xl font-bold mb-6">List Products</h2>
      <div className="flex mb-4">
        <select
          className="mr-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="clothing">New Arrivals</option>
          <option value="electronics">Women</option>
          <option value="accessories">Accessories</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
          <option value="fragrances">Fragnrances</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="more">More</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product w-full">
            <div className="p-4 bg-white shadow-md rounded-md flex">
              <div className="w-1/3">
                <img
                  src={p.url}
                  className="w-full h-40 object-cover mb-2 rounded-md"
                />
                <h3 className="text-lg font-bold mb-2">Name: {p.name}</h3>
                <p className="text-gray-600">
                  <b>Price: </b> {p.price}
                </p>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 mb-2">
                    <b>Description: </b>
                    {p.description}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">
                    <b>Size: </b> {p.size}
                  </p>
                  <p className="text-gray-600">
                    <b>Color: </b>
                    {p.color}
                  </p>
                </div>
                <div className="flex mt-2">
                  <Link
                    className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    to={`/edit/${p.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
