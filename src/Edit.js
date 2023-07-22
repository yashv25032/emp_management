import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [Employe, setEmploye] = useState({
        
        empname: "",
        email: ""

    });

 
    useEffect(() => {

        async function getAllEmployees() {

            try {
    
                const Employe = await axios.get(`http://localhost:3333/Employee/${id}`);
    
                setEmploye(Employe.data);
    
            } catch (error) {

                console.log(error,'something wrong')

            }
        }
    
        getAllEmployees();

    }, [id]);



    const onTextFieldChange = (e) => {

        setEmploye({

            ...Employe, [e.target.name]: e.target.value

        })

    }

    async function onFormSubmit(e) {

        e.preventDefault()

        try {

            await axios.put(`http://localhost:3333/Employee/${id}`, Employe)
            navigate('/');
        } catch (error) {

            console.log('Something wrong')

        }

    }



    const handleClick = () => {

        navigate('/');

    }

    return (

        <>

            <Box textAlign='center' className='head_bg' p={2} mb={2} >
                <Typography variant='h2' >React Crud Api Call</Typography>
            </Box>

            <Grid container justify="center" spacing={4} >

                <Grid item md={6} xs={12}  >

                    <Box textAlign={'center'} p={2} className='sub_head1' mb={2} >
                        <Typography variant='h4'>Add Employee</Typography>
                    </Box>

                    <form noValidate>

                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={6}>
                                <TextField autoComplete='id' name='id' variant='outlined' required fullWidth id='id' autoFocus value={Employe.id} disabled />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField name='empname' autoComplete='empname' variant='outlined' required fullWidth id='empname' value={Employe.empname} onChange={e => onTextFieldChange(e)} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField name='email' autoComplete='email' variant='outlined' required fullWidth id='email' value={Employe.email} onChange={e => onTextFieldChange(e)} />
                            </Grid>

                        </Grid>

                        <Box m={3} >
                            <Button type='submit' variant='contained' onClick={e => onFormSubmit(e)} color='primary' fullWidth>Edit</Button>
                        </Box>

                    </form>

                    <Box m={3} textAlign='center'>

                        <Button variant='container' color='primary' onClick={handleClick} >Back to Home</Button>

                    </Box>

                </Grid>
            </Grid>

        </>
    );
}

export default Edit;