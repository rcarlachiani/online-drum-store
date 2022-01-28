import React from 'react'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://i.ibb.co/J7dM3BW/snLogo.png" alt="store-logo" style={{width: 35, paddingRight: 5}} />
                    <Link to='/' className='links'>
                        <div className="navbar-brand" href="#">Drumstore</div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='./categoria/palillos' className='links'>
                                <div className="nav-link" href="#">Palillos</div>
                            </Link>
                            <Link to='./categoria/parches' className='links'>
                                <div className="nav-link" href="#">Parches</div>
                            </Link>
                            <Link to='./categoria/platillos' className='links'>
                                <div className="nav-link" href="#">Platillos</div>
                            </Link>
                            <Link to='./categoria/tambores' className='links'>
                                <div className="nav-link" href="#">Tambores</div>
                            </Link>
                            <Link to='./categoria/pedales' className='links'>
                                <div className="nav-link" href="#">Pedales</div>
                            </Link>
                            <Link to='./categoria/baterias' className='links'>
                                <div className="nav-link" href="#">Baterías</div>
                            </Link>
                        </div>
                    </div>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>

                </div>
            </nav>
        </div>
    )
}

export default NavBar
