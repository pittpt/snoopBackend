// import axios from "axios";

// var endpoint = "http://localhost:3000/api/getFollows/pittmail";
const email = "pittmail";
const address = "0x039458637482940dfg";

// fetch(endpoint)
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });

const API = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// API.post(`newUser/${email}`);
// API.delete(`unfollow/${email}/${address}`);
async function getFollows() {
  const { data } = await API.get(`getFollows/${email}`);
  console.log(data);
  console.log("done fetch");
}

// getFollows();
const getFoll = document.getElementById("getFollows");
getFoll.addEventListener("click", getFollows);

export default API;
