import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Sidebar = () => {
  return(
  <Router>
  <div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              <span data-feather="home"></span>
              Dashboard <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">
              <span data-feather="file"></span>
              Orders
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Learn">
              <span data-feather="shopping-cart"></span>
              Products
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="users"></span>
              Customers
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="bar-chart-2"></span>
              Reports
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="layers"></span>
              Integrations
            </Link>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <Link class="d-flex align-items-center text-muted" to="/" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </Link>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="file-text"></span>
              Current month
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="file-text"></span>
              Last quarter
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="file-text"></span>
              Social engagement
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <span data-feather="file-text"></span>
              Year-end sale
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</div>



</Router>
  );
}


export default Sidebar;