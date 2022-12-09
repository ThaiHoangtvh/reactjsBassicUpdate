
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
// 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const t = new Date();
let thu = weekday[t.getDay()];
// 
const e = new Date();
let day = e.getDate();
const Header = () => {
    return (
      <div id="header">
        <h1>{thu}, {day}th</h1>
        <p>{name}</p>
      </div>
    );
  };
  
  export default Header;