import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import MUIDataTable from "mui-datatables";
import './styles.scss';



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
	filterType: 'multiselect',
	selectableRows: false,
};



const Home = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
  	};

	return(
		<> 
			<div>
				<h1 className="title">Vaccine Tracking</h1>
			</div>
			<div className="">
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Nuevo registro</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Complete todos los campos del formulario para almacenar un nuevo registro.
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Batch"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							margin="dense"
							id="name"
							label="Vaccine Type"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							margin="dense"
							id="name"
							label="Location"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							margin="dense"
							id="name"
							label="Temperature"
							type="text"
							fullWidth
							variant="standard"
						/>
						<TextField
							margin="dense"
							id="name"
							label="User"
							type="text"
							fullWidth
							variant="standard"
						/>
						{/* <TextField
							margin="dense"
							id="name"
							label="Received at"
							helperText="dd/mm/aa hh:mm"
							type="text"
							fullWidth
							variant="standard"
						/> */}
						<br></br>
						<br></br>
						<TextField
							id="datetime-local"
							label="Received at"
							type="datetime-local"
							defaultValue="2017-05-24T10:30"
							// sx={{ width: 250 }}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancelar</Button>
						<Button onClick={handleClose}>Guardar</Button>
					</DialogActions>
				</Dialog>
			</div>

			<div className="tableContainer">
				<div className="user">
					<Avatar src="/broken-image.jpg" className="avatar"/>
					<span>0xF83SNF39FJSC992884192301492348821384FNN2519349934141</span>
				</div>
				<MUIDataTable
					title={<Button variant="contained" onClick={handleClickOpen}>Nuevo Registro</Button>}
					data={data}
					columns={columns}
					options={options}
					className="table"
				/>
			</div>
		</>
	)
}
  

export default(Home);