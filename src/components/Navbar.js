import { Link } from "react-router-dom";


const Navbar = ({searchText, setSearchText}) => {

  const updateSearchText = (e) =>{
    
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Movie Browser</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About Us</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="#">Action</Link></li>
                  <li><Link class="dropdown-item" to="#">Another action</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Coming Soon</Link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} />
              <button class="btn btn-outline-success" type="submit"><Link class="dropdown-item" to="/search">Search</Link></button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar