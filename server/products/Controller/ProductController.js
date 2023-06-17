import fs from "fs";
import path from "path";
import Product from "../Model/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to get products" });
  }
};

export const singleProduct = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to get product" });
  }
};

export const saveProduct = async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "You did not select a photo" });
    }

    const { price, description, size, color, category, title, producttype } =
      req.body;
    const { name, data, mimetype } = req.files.file;

    const fileSize = data.length;
    const ext = path.extname(name);
    const random = Math.round(Date.now());

    const fileName = `${title}${ext}`;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    const allowedTypes = [".png", ".jpg", ".jpeg"];
    if (!allowedTypes.includes(ext.toLowerCase())) {
      return res
        .status(400)
        .json({ error: "Only PNG, JPG, and JPEG files are allowed" });
    }

    if (fileSize > 5000000) {
      return res
        .status(400)
        .json({ error: "Image size should not exceed 5 MB" });
    }

    fs.mkdirSync("./public/images", { recursive: true });

    fs.writeFile(`./public/images/${fileName}`, data, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to save image" });
      }

      try {
        const product = await Product.create({
          name: title,
          price,
          description,
          size,
          color,
          category,
          producttype,
          image: fileName,
          url,
        });

        res.json({
          message: "Product added successfully",
          product: {
            id: product.id,
            name: title,
            price: product.price,
            description: product.description,
            size: product.size,
            color: product.color,
            category: product.category,
            producttype: product.producttype,
            image: product.image,
            url: product.url,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
          },
        });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Failed to save product" });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to save product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const filePath = `./public/images/${product.image}`;
    fs.unlinkSync(filePath);

    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: "The product has been successfully removed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { title, price, description, size, color, category, producttype } =
      req.body;

    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.name = title;
    product.price = price;
    product.description = description;
    product.size = size;
    product.color = color;
    product.category = category;
    product.producttype = producttype;

    if (req.files && req.files.file) {
      const { name, data } = req.files.file;
      const ext = path.extname(name);
      const fileName = `${title}${ext}`;
      const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

      fs.writeFileSync(`./public/images/${fileName}`, data);
      product.image = fileName;
      product.url = url;
    }

    await product.save();

    res.json({ msg: "Product updated successfully", product });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to update product" });
  }
};
