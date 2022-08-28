import axios from "axios";

export const getSkills = () => {
  return axios.get("http://localhost:3220/skill").then((response) => {
    console.log(response.data);
  });
};
