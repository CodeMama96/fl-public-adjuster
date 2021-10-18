import React from 'react'

import './navBar.css'

export default function NavBar() {
    return (
        <div className='main-navbar' >
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                    <button>logo here</button>
                    {/* <a href='josh's website here' className="logo"> */}
                        <img src='#' alt='linked img'></img>
                    {/* </a> */}
                    </div>
                    <div className='col-sm-10'>
                        <div className='nav'>
                        <ul className='menu'>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Services</li>
                        <li>Claim Types</li>
                        <li>Contact Us</li>
                        </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
