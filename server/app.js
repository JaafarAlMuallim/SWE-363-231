const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // or '*' to allow all origins
};

app.use(cors(corsOptions));

mongoose
  .connect(
    "mongodb+srv://ja3far03:lbYt4TCJJ4v0eSD3@cluster0.r5gecms.mongodb.net/",
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});
const Item = mongoose.model("Item", itemSchema);
// Create
async function createItem(name, price, image) {
  try {
    const item = new Item({
      name,
      price,
      image,
    });
    await item.save();
    console.log("Item created:", item);
    return item; // Returning the created item
  } catch (error) {
    console.error("Create operation failed:", error);
  }
}
// Read
async function readItem(id) {
  try {
    const item = await Item.findById(id);
    console.log("Item read:", item);
    return item; // Returning the found item
  } catch (error) {
    console.error("Read operation failed:", error);
  }
}
// Update
async function updateItem(id, newName) {
  try {
    const item = await Item.findByIdAndUpdate(
      id,
      {
        name: newName,
      },
      {
        new: true,
      },
    );
    console.log("Item updated:", item);
    return item; // Returning the updated item
  } catch (error) {
    console.error("Update operation failed:", error);
  }
}
// Delete
async function deleteItem(id) {
  try {
    await Item.findByIdAndDelete(id);
    console.log("Item deleted");
  } catch (error) {
    console.error("Delete operation failed:", error);
  }
}
// call funcs
async function performCRUDOperations() {
  try {
    // Create an item
    const createdItem = await createItem("Sample Item");
    // Read the item
    await readItem(createdItem._id);
    // Update the item
    await updateItem(createdItem._id, "Updated Item");
    // Delete the item
    await deleteItem(createdItem._id);
  } catch (error) {
    console.error("Error in CRUD operations:", error);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}
app.get("/read", async (req, res) => {
  const allItems = await Item.find({});
  res.send(allItems);
});

app.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    console.log(id);
    console.log(deletedItem);
    res.send(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting item");
  }
});
app.listen(8080, () => console.log("Server started on port 8080"));
// {"_id":{"$oid":"65545d9de4ac741f3edffd66"},"name":"Sample Item","price":{"$numberInt":"12"},"__v":{"$numberInt":"0"},"image":"https://images.unsplash.com/photo-1673203176988-151ab9e851c6?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
