import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    const history = useNavigate()
    const dashboard=()=>{
        history("/")
    }
    const contact=()=>{
        history("/contact")
    }
    const statistic=()=>{
        history("/statistic")
    }
  return (
    <div>
      <div class="nav-side-menu">
        <div class="brand">Tech pvt ltd 1972-2022</div>
        <i
          class="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>

        <div class="menu-list">
          <ul id="menu-content" class="menu-content collapse out">
            <li>
              <a href="#" onClick={dashboard}>
                <i class="fa fa-dashboard fa-lg fa-fw sidebar-icon"></i>
                Dashboard
              </a>
            </li>

            <li>
              <a href="#" onClick={contact}>
                <i class="fa fa-calendar fa-lg fa-fw sidebar-icon"></i> Contact
                us
              </a>
            </li>

            <li>
              <a href="#" onClick={statistic}>
                <i class="fa fa-bar-chart fa-lg fa-fw sidebar-icon"></i>{" "}
                Statistics
              </a>
            </li>

            <li data-toggle="collapse" data-target="#manage" class="collapsed">
              <a href="#">
                <i class="fa fa-puzzle-piece fa-lg fa-fw sidebar-icon"></i>{" "}
                Manage <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="manage">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Devices
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Groups
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> SIM Cards
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Users
                </a>
              </li>
            </ul>

            <li
              data-toggle="collapse"
              data-target="#settings"
              class="collapsed"
            >
              <a href="#">
                <i class="fa fa-sliders fa-lg fa-fw sidebar-icon"></i> Settings{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="settings">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> General
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Security
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Notifications
                </a>
              </li>
            </ul>

            <li
              data-toggle="collapse"
              data-target="#maintenance"
              class="collapsed"
            >
              <a href="#">
                <i class="fa fa-cogs fa-lg fa-fw sidebar-icon"></i> Maintenance{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="maintenance">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Operation Logs
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Events and Alarms
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Backup and Restore
                </a>
              </li>
            </ul>

            <li data-toggle="collapse" data-target="#tools" class="collapsed">
              <a href="#">
                <i class="fa fa-wrench fa-lg fa-fw sidebar-icon"></i> Tools{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="tools">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Manual SMS
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Import
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Export
                </a>
              </li>
            </ul>

            <li data-toggle="collapse" data-target="#help" class="collapsed">
              <a href="#">
                <i class="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Help{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="help">
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Documentation
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i> Customer Support{" "}
                  <small>
                    <i class="fa fa-external-link"></i>
                  </small>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
