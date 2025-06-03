import { useContext } from "react";
import Footer from "./Components/Footer";
import "./Components/Footer.css";
import Cart from "./Components/Cart"; 
import { Itemcontex } from "./contex/Cartcontexr";

function App() {
const itemstate=useContext(Itemcontex);
console.log("itemstate",itemstate);


  

  return (
    <div className="Footer" >
     
    <Footer name="MacBook" price={10000} />
     <Footer name="Pendrive" price={40000}/>
      <Footer name="Mobile" price={35000}/> 
     <Cart/>
     
    </div>
  );
}

export default App;
