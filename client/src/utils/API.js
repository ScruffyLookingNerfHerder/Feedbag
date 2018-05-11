import axios from "axios";

export default {
  // Gets all books
  getGroceries: function(userid) {
    return axios.get("/api/Groceries/"+ userid);
  },
  // Gets the book with the given id
  getGrocery: function(id) {
    return axios.get("/api/Groceries/" + id);
  },
  // Deletes the book with the given id
  deleteGroceries: function(id) {
    return axios.delete("/api/Groceries/" + id);
  },
  // Saves a book to the database
  saveGroceries: function(userid, Grocery) {
    return axios.post("/api/Groceries/" + userid, Grocery);
  }
};
