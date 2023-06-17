import db from "../config/database.js";

import { DataTypes } from "sequelize";

const Product = db.define(
  "product",
  {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    category: DataTypes.STRING,
    producttype: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default Product;

(async () => {
  await db.sync();
})();
