import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Payment = () => {
   const names=["None","Shezan","KArim","RAhim","AZim"];
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
    
    function handleSubmit(e){
      const form = document.forms.paymentForm;
      const name = form.name.value;
      const amount = form.amount.value;
      const date = form.date.value;
  
      const user = { name, amount, date };
      console.log("Form submitted:", user);

    }
    return (
        <div>
            <Grid >
            <form name="paymentForm" onSubmit={(e) => e.preventDefault()}>
            <Grid item xs={4}>
            <Typography sx={{paddingBottom:"5px"}}>Select Your Name</Typography>
            <FormControl sx={{ m: 1, minWidth: 220,paddingBottom:"15px" }} size="small">
          <InputLabel >name</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Name"
            name="name"
            
          >
            
              {names.map((name)=>(
                <MenuItem value={name}>
                   <em>{name}</em>
            </MenuItem>

              ))}
             
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
                  <Box>
                    <Button  variant='contained' onClick={handleClickOpen}>Submit</Button>
                    <Dialog
                    sx={{width:"380px",height:"280px"}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Is all the information is Correct?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please check if all of the information given are correct.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => { handleClose(); handleSubmit()}}>Agree</Button>
        </DialogActions>
      </Dialog>
       </Box>

                </Grid>
                </form>
            </Grid>
        </div>
    );
};

export default Payment;