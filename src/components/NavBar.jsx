import React from 'react'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <img src="https://i.ibb.co/J7dM3BW/snLogo.png" alt="store-logo" style={{width: 35, paddingRight: 5}} />
                    <a class="navbar-brand" href="#">Drumstore</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Productos</a>
                            <a class="nav-link" href="#">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
