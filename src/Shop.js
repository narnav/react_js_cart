import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
    return (
        <div>Shop<br></br>
            <Link to="/Shop/0">Start</Link> |{" "}
            <Link to="/Shop/1">dairyyyyy</Link> |{" "}
            <Link to="/Shop/2">fish</Link> |{" "}
            <Link to="/Shop/3">meat</Link> |{" "}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Shop