import React from 'react'

const Cart = ({ cart, Total, buy }) => {
    return (
        <div style={{backgroundColor:'red'}}>cart

            length{cart.length}
            Total  {Total}

            {cart.map((pro, ind) =>
                <div key={ind}>
                    <button onClick={() => buy(pro, 1)} className='btn btn-success'>+</button>
                    Desc:{pro.name} Price:{pro.price},Amount:{pro.amount}
                    <button onClick={() => buy(pro, -1)} className='btn btn-danger'>-</button>
                </div>)}
            ${Total}

        </div>
    )
}

export default Cart