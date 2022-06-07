import React from "react";
import MUIDataTable from "mui-datatables";
import './styles.css';



const columns = ["Batch", "Vaccine Type", "Location", "Temperature", "User", "Received at", "Delivered at"];

const data = [
  ["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-11ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-5ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z002", "Pfizer", "Bodega", "-8ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
  ["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
];

const options = {
  filterType: 'checkbox',
};



const Home = () => {
    return(
        <> 
          <MUIDataTable
            title={"Vaccine Track"}
            data={data}
            columns={columns}
            options={options}
          />
        </>
    )
}
  

export default(Home);