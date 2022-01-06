import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://i.ibb.co/J7dM3BW/snLogo.png" alt="store-logo" style={{width: 35, paddingRight: 5}} />
                    <a className="navbar-brand" href="#">Drumstore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Productos</a>
                            <a className="nav-link" href="#">Contacto</a>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar
