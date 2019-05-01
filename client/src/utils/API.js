// This is where we get the 'urlencoded' information we defined for the app const (express) in server.js.  Notice we have gets, post, and delete here, but not put (we aren't going to edit any books in our saved list)

import axios from "axios";

export default {
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
