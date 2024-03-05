
import Table from "../../components/table/Table";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import "./home.scss";

export default function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
         <Navbar/>
         <div className="charts">
          <Featured />
          <Chart title="Last 6 Months patients on chemotherapy" aspect={2 / 1} />
        </div>
         <div className="listContainer">
          <div className="listTitle">Latest Patient</div>
          <Table/>
        </div>
      </div>
     
    </div>
  )
}
