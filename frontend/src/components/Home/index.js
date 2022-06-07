import './styles.scss';
import React from "react";
import { connect } from 'react-redux';
import Web3 from 'web3/dist/web3.min.js';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import * as actions from '../../actions/badges';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


const columns = ["Batch", "Vaccine Type", "Location", "Temperature", "User", "Received at", "Delivered at"];

const data = [
	["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
	["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
	["4120Z003", "J&J", "Centro vacunación Oakland", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
	["4120Z001", "Moderna", "Aeropuerto", "-20ºC", "Francisco Rosal", "07/05/22 23:11:58", "07/05/22 23:45:50"],
	["4120Z002", "Pfizer", "Bodega", "-20ºC", "Jose Block", "07/05/22 23:11:58", "07/05/22 23:45:50"],
];

const options = {
	filterType: 'multiselect',
	selectableRows: false,
};


const Home = ({ user_address, contract, retrieveVaccineBadgeLogsStarted, handleCreate }) => {
	const [open, setOpen] = useState(false);
    useEffect(retrieveVaccineBadgeLogsStarted, []);

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
				<Dialog open={ open } onClose={ handleClose }>
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
						<Button onClick={ handleClose }>Cancelar</Button>
						<Button onClick={ handleCreate }>Guardar</Button>
					</DialogActions>
				</Dialog>
			</div>

			<div className="tableContainer">
				<div className="user">
					<Avatar src="/broken-image.jpg" className="avatar"/>
					<span>{ user_address }</span>
				</div>
				<MUIDataTable
					title={ <Button variant="contained" onClick={ handleClickOpen }>Nuevo Registro</Button> }
					data={ data }
					columns={ columns }
					options={ options }
					className="table"
				/>
			</div>
		</>
	)
}
  

export default connect(
	state => ({}),
	dispatch => ({
		retrieveVaccineBadgeLogsStarted(user_address, contract) {
			dispatch(actions.retrieveVaccineBadgeLogsStarted(user_address, contract));
		},
		handleCreate(user_address, contract, badgePayload) {
			dispatch(actions.createVaccineBadgeLogStarted(user_address, contract, badgePayload));
		}
	}),
    (stateProps, dispatchProps, ownProps) => ({
		...ownProps,
		...stateProps,
		...dispatchProps,
		retrieveVaccineBadgeLogsStarted() {
			dispatchProps.retrieveVaccineBadgeLogsStarted(ownProps.user_address, ownProps.contract);
		},
		handleCreate(badgePayload) {
			console.log("HOLA", badgePayload)
			// dispatchProps.handleCreate(ownProps.user_address, ownProps.contract, badgePayload);
		}
	})
)(Home);