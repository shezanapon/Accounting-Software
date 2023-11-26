import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cost = () => {
   const names=["Advance for Slot","Remaining for Slot","Football","Accessories","Other"];
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
    
    function handleSubmit(e){
      const form = document.forms.paymentForm;
      const cost = form.cost.value;
      const amount = form.amount.value;
      const date = form.date.value;
  
      const user = { cost, amount, date };
      console.log("Form submitted:", user);

    }
    return (
        <div>
            <Grid >
            <form name="paymentForm" onSubmit={(e) => e.preventDefault()}>
            <Grid item xs={4}>
            <Typography sx={{paddingBottom:"5px"}}>Cost on</Typography>
            <FormControl sx={{ m: 1, minWidth: 220,paddingBottom:"15px" }} size="small">
          <InputLabel >Cost</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Cost"
            name="cost"
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
            <Typography sx={{paddingBottom:"5px"}}> Date</Typography>
                <TextField name="date" size='small' id="outlined-basic" type='date' variant="outlined" sx={{paddingBottom:"30px",width:"228px"}}/>
                </Grid>
                <Grid>
                  <Box>
                    <Button  variant='contained' onClick={handleClickOpen}>Submit</Button>
                    <Dialog
                    sx={{width:"50px"}}
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

export default Cost;