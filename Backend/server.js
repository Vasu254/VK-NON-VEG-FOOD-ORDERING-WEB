// Backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const ExcelJS = require("exceljs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Order Schema
const orderSchema = new mongoose.Schema({
  name: String,
  items: Array,
  total: Number,
  date: { type: Date, default: Date.now },
});
const Order = mongoose.model("Order", orderSchema);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/biryani_orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// POST endpoint to receive orders
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    // Write to Excel
    const workbook = new ExcelJS.Workbook();
    let worksheet;
    try {
      await workbook.xlsx.readFile("orders.xlsx");
      worksheet = workbook.getWorksheet("Orders");
    } catch {
      worksheet = workbook.addWorksheet("Orders");
      worksheet.addRow(["Name", "Items", "Total", "Date"]);
    }
    worksheet.addRow([
      order.name || "",
      order.items.map((i) => `${i.name} (${i.plateType})`).join(", "),
      order.total,
      order.date.toLocaleString(),
    ]);
    await workbook.xlsx.writeFile("orders.xlsx");

    res.status(201).json({ message: "Order saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
