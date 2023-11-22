import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
const Payment = () => {
    const [name, setName] = React.useState('');
    const [data,setData]=useState({})

    const handleChange = (event) => {
      setName(event.target.value);
    };
    const updateData=e=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

    }
    return (
        <div>
            <Grid >
            
            <Grid item xs={4}>
            <Typography sx={{paddingBottom:"5px"}}>Select Your Name</Typography>
            <FormControl sx={{ m: 1, minWidth: 220,paddingBottom:"15px" }} size="small">
          <InputLabel >name</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={name}
            label="Name"
            name="name"
            
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
                
                </Grid>
            <Grid item xs={4}>
            <Typography sx={{paddingBottom:"5px"}}>Input Amount</Typography>
                <TextField name="amount" size='small' id="outlined-basic" label="Amount" variant="outlined" sx={{paddingBottom:"30px"}}/>
                </Grid>
                <Grid item xs={4}>
            <Typography sx={{paddingBottom:"5px"}}>Payment Date</Typography>
                <TextField name="date" size='small' id="outlined-basic" type='date' variant="outlined" sx={{paddingBottom:"30px",width:"228px"}}/>
                </Grid>
                <Grid>
                    <Button variant='contained'>Submit</Button>
                </Grid>
             
            </Grid>
        </div>
    );
};

export default Payment;