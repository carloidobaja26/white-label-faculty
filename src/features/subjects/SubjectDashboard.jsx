import * as React from "react"
import {
  Box,  
  Grid,
  TextField,
  Typography
} from "@mui/material";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from "react"

import WhiteCardBox from "../../components/cards/WhiteCardBox"
import UserHeader from "../../components/header/UserHeader"

import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';



const SubjectTable = (e) => {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "gray" }}>
              <TableCell>#</TableCell>
              <TableCell align="left">Subject Code</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Lec</TableCell>
              <TableCell align="left">Lab</TableCell>
              <TableCell align="left">Unit</TableCell>
              <TableCell align="left">School Year</TableCell>
              <TableCell align="left">Action</TableCell>
              <TableCell align="left">Subject Offer Schedule</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    001
                  </TableCell>
                   <TableCell align="left">Signals</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Lec</TableCell>
                  <TableCell align="left">Lab</TableCell>
                  <TableCell align="left">Unit</TableCell>
                <TableCell align="left">2021</TableCell>
                  <TableCell align="left">
                    <EditIcon id="Update"/>
                    <DeleteIcon />
                  </TableCell>
                 <TableCell align="left">Schedules</TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
}

const AddSubject = (e) => {
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = (e) => {setOpen(true);
      if(e.target.id === 'Add') {
        var buttonVal = e.target.id;
        alert('buttonVal: '+buttonVal);
      } else if(e.target.id === 'Update') {
        alert(this.buttonVal);
        this.buttonVal = "Update";
      };  
      return buttonVal;
    };
    const handleCloseModal = () => {setOpen(false)};
    const handleAddSubject = () => {alert("subjectAdded")};
    return (
       <>
         <Button id='Add' variant="contained" onClick={handleOpenModal}>Add Subject</Button>
        <Dialog
        open={open}
        onClose={handleCloseModal}
        sx={{ borderColor: 'green' }}
        >
            <DialogContent 
            // sx={{ width: 100% }}
            >
               <Box>
               <DialogActions>
                    <CloseIcon onClick={handleCloseModal}/>
                </DialogActions>
                <DialogTitle>{' subject here'}</DialogTitle>
                {/* <DialogContentText>
                <Grid item>
                  <TextField
                      label="Subject Code"
                      multiline
                      id="filled-hidden-label-small"
                      size="small"
                    />
                </Grid>
                <Grid item>
                  <span style={{ fontWeight: "bold" }}>
                  <TextField
                    label="Description"
                    multiline
                    rows="3"
                    id="filled-hidden-label-small"
                    size="small"
                  />
                  </span>
                </Grid>
                <Grid item>
                  <TextField
                      label="Lec"
                      multiline
                      id="filled-hidden-label-small"
                      size="small"
                    />
                </Grid>
                <Grid item>
                  <TextField
                      label="Lab"
                      multiline
                      id="filled-hidden-label-small"
                      size="small"
                    />
                </Grid>
                <Grid item>
                  <TextField
                      label="Unit"
                      multiline
                      id="filled-hidden-label-small"
                      size="small"
                    />
                </Grid>
                <Grid item>
                  <TextField
                      label="School Year"
                      multiline
                      id="filled-hidden-label-small"
                      size="small"
                    />
                </Grid>
                <Button variant="contained" onClick={handleAddSubject}>Add</Button>
               
                </DialogContentText> */}
               </Box>
            </DialogContent>
        </Dialog>
       </>
    )
}

const handleAddOrUpdate = (e) => {
 if(e.target.id === 'add') {
   alert("successful")
 }
}



const SubjectDashboard = () => {
    return (
        <React.Fragment>
            <CardContent>
                 <UserHeader />
                 <AddSubject/>
                 <WhiteCardBox card={<SubjectTable />} />   
             </CardContent>
        </React.Fragment>
    )
}

export default SubjectDashboard;