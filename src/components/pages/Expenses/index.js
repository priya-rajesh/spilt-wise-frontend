import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Model from "../Model"; // Adjust relative to your file's location

const rows = [
  {
    name: "Home Loan",
    income: 10000,
    date: "10/06/2024",
    amount: 3000,
    note: "Paid",
  },
  {
    name: "Gas",
    income: 20000,
    date: "18/06/2024",
    amount: 1000,
    note: "Paid",
  },
  {
    name: "Current",
    income: 30000,
    date: "19/06/2024",
    amount: 1500,
    note: "Paid",
  },
  {
    name: "Pertrol",
    income: 40000,
    date: "28/06/2024",
    amount: 5000,
    note: "Paid",
  },
  {
    name: "Bank Loan",
    income: 50000,
    date: "30/06/2024",
    amount: 3000,
    note: "Paid",
  },
];

const MyTable = () => {
  const handleEdit = (id) => {
    console.log(`Edit item with id ${id}`);
    // Implement edit functionality here
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id ${id}`);
    // Implement delete functionality here
  };

  const PlusButton = () => {
    return (
      <Button color="primary">
        <Model />
      </Button>
    );
  };

  return (
    <Paper>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={3}
        sx={{ p: 2 }}
      >
        <Typography variant="h6">Expenses</Typography>
        <div>
          <PlusButton />
        </div>
      </Stack>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Name
              </TableCell>
              <TableCell align="left">Income</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Note</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.income}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.note}</TableCell>
                <TableCell align="left">
                  <IconButton onClick={() => handleEdit(row.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MyTable;
