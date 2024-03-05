import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Yasmine Ahmed Sayed Ahmed </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Yasmine@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">011111111</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    27 el guesh chatby
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Protocole:</span>
                  <Link to="/protocoles" style={{ textDecoration: "none" }}>
                  <span className="itemValue">Protocole 5</span>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Patient tracking ( Last 6 days)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Patients</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;


