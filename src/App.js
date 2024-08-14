import React from 'react'
import { Link, Outlet } from "react-router-dom";
const App = () => {
    return (
        <div>
            App
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <Link to="/">Home</Link> |{" "}
                <Link to="/Shop">Shop</Link> |{" "}
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default App















// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const products = [{ id: 1, desc: 'milk', price: 4 }, { id: 2, desc: 'bamba', price: 2 }, { id: 3, desc: 'bamba L', price: 3 }]
//     const [cart, setcart] = useState([])
//     const [Waga, setWaga] = useState(true)
//     const [Total, setTotal] = useState(0)
//     useEffect(() => {
//         console.log("test");

//     }, [])

//     useEffect(() => {
//         console.log("cart");
//         // console.log("buy...");
//         // console.table(cart);
//         // update total
//         let temp = 0
//         cart.forEach(item => temp += item.price * item.amount)
//         setTotal(temp)
//     }, [cart])

//     const buy = (pro, deltaAmount) => {
//         let tempProduct = cart.filter(prod => prod.id == pro.id)[0]

//         if (tempProduct) {//if exist (update amount)
//             tempProduct.amount += deltaAmount
//             if (tempProduct.amount == 0) { //amount == 0 , product should remove
//                 console.log("this item should b remove");
//                 setcart([...cart.filter(prod => prod.id != pro.id)])
//             }
//             else {
//                 setcart([...cart])//call the useEffect - to calc the Total,amount update
//             }
//         } else {//not exist -  add new item 2 the list
//             pro.amount = 1
//             setcart([pro, ...cart]); //add product 2 my cart , call to useEffect
//         }
//     }

//     return (
//         <div>

//             <button onClick={() => setWaga(!Waga)}>Test</button>
//             {products.map(pro =>
//                 <div key={pro.id}>
//                     Desc:{pro.desc} Price:{pro.price}
//                     <button onClick={() => buy(pro, 1)}>Buyyyyy</button>
//                 </div>)}

//             <hr />
//             <h1>Your cart ({cart.length}) , Only {Total}</h1>
//             {cart.map((pro, ind) =>
//                 <div key={ind}>
//                     <button onClick={() => buy(pro, 1)}>+</button>
//                     Desc:{pro.desc} Price:{pro.price},Amount:{pro.amount}
//                     <button onClick={() => buy(pro, -1)}>-</button>
//                 </div>)}

//         </div>
//     )
// }

// export default App