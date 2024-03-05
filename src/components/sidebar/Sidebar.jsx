import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">logo</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Patients</span>
            </li>
          </Link>
          <Link to="/protocoles" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Protocoles</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/Stats" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          </Link >
          <Link to="/notification" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          
          <p className="title">SERVICE</p>
          <Link to="/SystemHealth" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          </Link>
          <Link to="/logs" style={{ textDecoration: "none" }}> 
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          </Link>
          <Link to="/Setting" style={{ textDecoration: "none" }}><li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          </Link>
          
          <p className="title">USER</p>
          <Link to="/Profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/Logout" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
          
        </ul>
      </div>
      <div className="bottom">
        
      </div>
    </div>
  )
}

export default Sidebar


/*
<li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
*/ 