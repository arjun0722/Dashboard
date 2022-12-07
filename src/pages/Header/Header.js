import React from "react";
import "./Header.css";


function Header() {

  return (

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </form>
  </div>
</nav>


  
  );
}

export default Header;