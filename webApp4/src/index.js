import "./style.css";
import "./style.scss";

console.log("========|webpack!|==========")

const fancyFunc = () => {
    return [202, 10, 20];
  };
  
  const [a,c, b] = fancyFunc();

  console.log(a)
  console.log(c)
  console.log(b)
  console.log(a*b)
  console.log(fancyFunc)

  console.log("========|webpack!|==========")