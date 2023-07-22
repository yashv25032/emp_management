import React, { useState, useEffect } from 'react';
import { Typography, Box, TableContainer, Table, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip, TableBody, } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';


const List = () => {

    const [Employee, setEmployee] = useState();

    useEffect(() => {
        getAllEmployee();
    });

    async function getAllEmployee() {

        try {

            const Employee = await axios.get("http://localhost:3333/Employee");
            setEmployee(Employee.data);

        } catch (error) {
            console.log('something wrong')
        }
    }


    
    const handleDelete = async id =>{

        await axios.delete(`http://localhost:3333/Employee/${id}`)

        var newEmp = Employee.filter((item) => {

            return item.id !== id ;

        })

    }

    return (

        <>

            <Box textAlign='center' className='head_bg2' p={2}  >
                <Typography variant='h4'>Employee List</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell className='sub_bg' align='center' >No</TableCell>

                            <TableCell className='sub_bg' align='center' >Name</TableCell>

                            <TableCell className='sub_bg' align='center' >Email</TableCell>

                            <TableCell className='sub_bg' align='center' >Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            Array.isArray(Employee) && Employee.map((curelem, index) => {
                                return (

                                    <TableRow key={index}>

                                        <TableCell align='center'>{index +1}</TableCell>

                                        <TableCell align='center'>{curelem.empname}</TableCell>

                                        <TableCell align='center'>{curelem.email}</TableCell>

                                        <TableCell align='center'>

                                            <Tooltip title='view'>

                                                <IconButton><Link to={`/view/${curelem.id}`}><VisibilityIcon color='primary' /></Link></IconButton>

                                            </Tooltip>

                                            <Tooltip title='edit'>

                                                <IconButton><Link to={`/edit/${curelem.id}`}><EditIcon color='secondary' /></Link></IconButton>

                                            </Tooltip>

                                            <Tooltip title='delete'>

                                                <IconButton onClick={() => handleDelete(curelem.id)} ><DeleteIcon color='error' /></IconButton>

                                            </Tooltip>

                                        </TableCell>

                                    </TableRow>

                                )})}

                    </TableBody>

                </Table>

            </TableContainer>



        </>


    );
}

export default List;
