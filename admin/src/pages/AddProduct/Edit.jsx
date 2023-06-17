import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [image, setImage] = useState("");
  const [prev, setPrev] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [producttype, setProducttype] = useState("");
  const [prevImages, setPrevImages] = useState([]); // Add prevImages state
  const navigate = useNavigate();
  const { id } = useParams();
  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPrev(URL.createObjectURL(image));
  };

  useEffect(() => {
    getItembyId();
  }, []);
  const getItembyId = async () => {
    const response = await axios.get(`http://localhost:5080/products/${id}`);
    setImage(response.data.image);
    setTitle(response.data.name);
    setPrev(response.data.url); // Update this line
    setPrice(response.data.price);
    setDescription(response.data.description);
    setSize(response.data.size);
    setColor(response.data.color);
    setCategory(response.data.category);
    setProducttype(response.data.producttype);
    setPrevImages(response.data.prevImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("file", image);
    }

    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("category", category);
    formData.append("producttype", producttype);
    try {
      const res = await axios.put(
        `http://localhost:5080/products/${id}`,
        formData,
        {
          headers: { "Content-Type": "moltipart/form-Data" },
        }
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/products");
  };

  return (
    <div className="container mx-auto h-screen overflow-y-scroll">
      <div className="container mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto bg-white p-6 shadow-md rounded-md form"
          enctype="multipart/form-data"
        >
          <h2 className="text-xl font-bold mb-6">Edit Product</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Edit Name
            </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              value={title}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Edit Price
            </label>
            <input
              type="text"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              value={price}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Edit Description
            </label>
            <textarea
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              value={description}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="size"
            >
              Edit Size
            </label>
            <input
              type="text"
              name="size"
              onChange={(e) => setSize(e.target.value)} // Update this line
              id="size"
              value={size}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="color"
            >
              Edit Color
            </label>
            <input
              type="text"
              name="color"
              onChange={(e) => setColor(e.target.value)}
              id="color"
              value={color}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Edit Category
            </label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="clothing">New Arrivals</option>
              <option value="electronics">Women</option>
              <option value="accessories">Accessories</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="fragrances">Fragnrances</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="more">More</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Edit Product Type
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
              Edit Photo
            </label>
            <input type="file" id="photo" onChange={loadImage} />
            {prev && (
              <img
                className="images"
                src={prev}
                alt="Previous Image"
                style={{ marginTop: "10px", maxWidth: "200px" }}
              />
            )}
          </div>
          <div className="flex justify-center">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
              Edit
            </button>
          </div>
        </form>
        {prevImages &&
          prevImages.map((prevImage, index) => (
            <img
              key={index}
              className="images"
              src={prevImage}
              alt={`Previous Image ${index + 1}`}
              style={{ marginTop: "10px", maxWidth: "200px" }}
            />
          ))}
      </div>
    </div>
  );
};

export default Edit;
