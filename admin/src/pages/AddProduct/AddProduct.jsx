import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProductForm = () => {
  const [image, setImage] = useState("");
  const [prev, setPrev] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [producttype, setProducttype] = useState("");

  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPrev(URL.createObjectURL(image));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("category", category);
    formData.append("producttype", producttype);

    const response = await axios.post(
      "http://localhost:5080/products",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    navigate("/products");
    toast(response.data.msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto h-screen overflow-y-scroll">
      <div className="container mx-auto ">
        <form
          onSubmit={handleForm}
          className="max-w-sm mx-auto bg-white p-6 shadow-md rounded-md form"
        >
          <h2 className="text-xl font-bold mb-6">Add Product</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="size"
            >
              Size
            </label>
            <input
              type="text"
              name="size"
              onChange={(e) => setSize(e.target.value)}
              id="size"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="color"
            >
              Color
            </label>
            <input
              type="text"
              name="color"
              onChange={(e) => setColor(e.target.value)}
              id="color"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              name="category"
              value={category} // Add this line to set the selected value
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="new arrivals">New Arrivals</option>
              <option value="women">Women</option>
              <option value="accessories">Accessories</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="fragrances">Fragrances</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="more">More</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Product Type
            </label>
            <select
              name="producttype"
              value={producttype} // Add this line to set the selected value
              onChange={(e) => setProducttype(e.target.value)}
              id="producttype"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>
                Select a Type of product
              </option>
              <option value="hijab">Hijab</option>
              <option value="jibabs">Jibabs</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photo"
            >
              Photo
            </label>
            <input type="file" id="photo" onChange={loadImage} />
            <>
              {prev ? (
                <img
                  className="images"
                  src={prev}
                  style={{ marginTop: "10px", maxWidth: "200px" }}
                ></img>
              ) : (
                ""
              )}
            </>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
