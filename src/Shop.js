import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
    return (
        <div style={{backgroundColor:'green'}}>Shop<br></br>
            <Link style={{color:'pink'}} to="/Shop/0">Start</Link> |{" "}
            <Link className='btn btn-primary' to="/Shop/1">dairyyyyy</Link> |{" "}
            <Link className='btn btn-primary' to="/Shop/2">fish</Link> |{" "}
            <Link className='btn btn-primary' to="/Shop/3">meat</Link> |{" "}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Shop