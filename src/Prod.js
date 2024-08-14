import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProductsByCategory, getCategoryName } from './myData';
import Cart from './Cart';

const Prod = () => {
    let catid = useParams().catid;
    const [cart, setcart] = useState([])
    const [Total, setTotal] = useState(0)

    // relaod the cart from localstorage - if exist,run once (when component load)
    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem("cart"))
        if (temp != null) {
            setcart(temp)
        }
    }, [])

    useEffect(() => {
        let temp = 0
        cart.forEach(item => temp += parseInt(item.price.replace('$', '').replace(",", "")) * item.amount)
        setTotal(temp)
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart)) //save cart to localstorage 
        }
    }, [cart])

    const buy = (pro, deltaAmount) => {
        let tempProduct = cart.filter(prod => prod.id == pro.id)[0]

        if (tempProduct) {//if exist (update amount)
            tempProduct.amount += deltaAmount
            if (tempProduct.amount == 0) { //amount == 0 , product should remove
                console.log("this item should b remove");
                setcart([...cart.filter(prod => prod.id != pro.id)])
            }
            else {
                setcart([...cart])//call the useEffect - to calc the Total,amount update
            }
        } else {//not exist -  add new item 2 the list
            pro.amount = 1
            setcart([pro, ...cart]); //add product 2 my cart , call to useEffect
        }

    }

    return (
        <div style={{backgroundColor:'gray'}}>
            <h1> Products : {getProductsByCategory(catid).length} from  {getCategoryName(catid)}</h1>
            {getProductsByCategory(catid).map(prod => <div key={prod.id}>
                {prod.name} ,{prod.price}
                <button onClick={() => buy(prod, 1)} className='btn btn-success'>Buyyyyy</button>
            </div>)}
            <hr />
            Your cart
            <button className='btn btn-danger' onClick={() => setcart([])}>Clear cart</button>
            <Cart cart={cart} Total={Total} buy={buy}></Cart>
        </div>
    )
}

export default Prod