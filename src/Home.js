import React from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';

import List from './List';
import axios from 'axios';

const Home = () => {

        const [Employe , setEmploye] = useState(
            {

                empname:"",
                email:""
                
            }
        );

        const [status , Setstatus] = useState();

        const onTextFieldChange = (e)=>{
            setEmploye({

             ...Employe, [e.target.name] : e.target.value

            })

            console.log(Employe);

        }


         async function onFormSubmit(e){

            e.preventDefault()

            try {

                await axios.post(`http://localhost:3333/Employee`,Employe)
                Setstatus(true);
                
            } catch (error) {
                
            }

        }
        if (status){
            return <Home />
        }



    return (
        <>

            <Box textAlign='center' className='head_bg' p={2} mb={2} >
                <Typography variant='h2' >React Crud Api Call</Typography>
            </Box>

            <Grid container justify='center' >

                <Grid item md={6} xs={12}  >

                    <Box textAlign={'center'} p={2} className='sub_head1' mb={2} >
                        <Typography variant='h4'>Add Employee</Typography>
                    </Box>

                    <form noValidate>

                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField name='empname' autoComplete='empname' onChange={e => onTextFieldChange(e)} variant='outlined' required fullWidth id='empname' label='Name' />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField name='email' autoComplete='email' variant='outlined' onChange={e => onTextFieldChange(e)} required fullWidth id='email' label='Email Address' />
                            </Grid>

                        </Grid>

                        <Box m={3} >
                            <Button type='submit' variant='contained' color='primary' onClick={e => onFormSubmit(e)} fullWidth>Add</Button>
                        </Box>
                        
                    </form>

                </Grid>

                <Grid md={6} xs={12} >

                    <List />

                </Grid>

            </Grid>


        </>
    );
}

export default Home;
