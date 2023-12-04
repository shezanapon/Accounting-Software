import React,{useContext} from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import NoteContext from '../context/Context';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));





export default function CostDetails() {
  const {value1}= useContext(NoteContext);

  return (
    <Box>
      <center>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 0px 6px 0px",
            marginBottom:"30px",color:"white",bgcolor:"#4a148c",borderRadius:"5px",width:"230px"}}>
            <Typography sx={{fontSize:"18.5px"}}>
              COST DETAILS
              </Typography> 
            </Box></center>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cost on</StyledTableCell>
              <StyledTableCell align="right">C/A</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value1.map((row) => (
              <StyledTableRow key={row.cost}>
                <StyledTableCell component="th" scope="row">
                  {row.cost}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Box>
  );
}
