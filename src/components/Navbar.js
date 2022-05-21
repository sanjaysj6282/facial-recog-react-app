import React from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">{props.title} </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">{props.TextAbout}</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar

Navbar.propTypes={
  title: PropTypes.string.isRequired, 
  Textabout: PropTypes.string.isRequired
}

Navbar.defaultProps={
  title: "Set title",
  Textabout: "Set about"
}