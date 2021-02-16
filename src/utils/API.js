import axios from "axios";

const BASEURL = "https://dog.ceo/api/breed/";
const DOGIMAGE = "/images/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + DOGIMAGE);
  },
  random: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};