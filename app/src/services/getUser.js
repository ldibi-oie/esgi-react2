import jwt_decode from "jwt-decode";
import axios from "axios";

export function getUser() {
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  console.log(decoded);
  var p = [];
  axios
    .post("http://localhost:3220/user/", { id: decoded.id })
    .then((response) => {
      p.push(response.data);
    });
  return p;
}
