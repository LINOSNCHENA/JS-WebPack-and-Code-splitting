import "./style.css";
import "./style.scss";

import moment from "moment";
const getUserModule = () =>
  import(/* webpackChunkName: "user@PembaAPI" */ "./fakeDatabase/usersAPI");

// /// Modern JS
const fancyFunc = () => {
  return [12, 20];
};
const [a, b] = fancyFunc();

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("===========|UsersAndCustomers|=============");
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  console.log("=========|Arrow=> Function|===============");
  console.log(fancyFunc);
  console.log(a);
  console.log(b);
  console.log(a * b);
  console.log("=========|Arrow=> Function|===============");
});
