import React from 'react';
import { Typography, Box, Grid, TableContainer, Table, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip, TextField, Button, TableBody, } from '@mui/material';
import { useParams , useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {


    const { id } = useParams();

    const [Employees, setEmployees] = useState([]);
    
    const navigate = useNavigate();


    useEffect(() => {
        getAllEmployees();
    });

    async function getAllEmployees() {

        try {

            const Employees = await axios.get(`http://localhost:3333/Employee/${id}`);
            setEmployees(Employees.data);

        } catch (error) {
            console.log('something wrong')
        }
    }

    const handleClick = () =>{

        navigate('/')

    }
    
    return (
        <>
            <Box textAlign='center' className='head_bg2' p={2}  >
                <Typography variant='h4'>Student List</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell className='sub_bg' align='center' >No</TableCell>

                            <TableCell className='sub_bg' align='center' >Name</TableCell>

                            <TableCell className='sub_bg' align='center' >Email</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>
                                     
                        <TableRow>

                            <TableCell align='center'>{Employees.id}</TableCell>

                            <TableCell align='center'>{Employees.empname}</TableCell>

                            <TableCell align='center'>{Employees.email}</TableCell>

                        </TableRow>

                    </TableBody>

                </Table>

            </TableContainer>

            <Box m={3} textAlign='center'>

                <Button variant='container' color='primary' onClick={handleClick}  >Back to Home</Button>

            </Box>


        </>
    );
}

export default View;
