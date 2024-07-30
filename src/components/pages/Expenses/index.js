import React, { useState } from "react";
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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Model from "../Model"; // Adjust relative to your file's location

const rows = [
  {
    name: "Salary",
    type: "Income",
    date: "05/06/2024",
    amount: 35000,
    note: "Salary",
  },
  {
    name: "Home Loan",
    type: "Expense",
    date: "10/06/2024",
    amount: 3000,
    note: "Paid",
  },
  {
    name: "Gas",
    type: "Expense",
    date: "18/06/2024",
    amount: 1000,
    note: "Paid",
  },
  {
    name: "Current",
    type: "Expense",
    date: "19/06/2024",
    amount: 1500,
    note: "Paid",
  },
  {
    name: "Pertrol",
    type: "Expense",
    date: "28/06/2024",
    amount: 5000,
    note: "Paid",
  },
  {
    name: "Bank Loan",
    type: "Expense",
    date: "30/06/2024",
    amount: 3000,
    note: "Paid",
  },
];

const MyTable = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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

  const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
      <FormControl
        sx={{
          width: "120px",
        }}
        size="small"
      >
        <InputLabel sx={{ fontSize: "12px" }} id="dropdown-label">
          Select Month
        </InputLabel>
        <Select
          labelId="dropdown-label"
          value={selectedValue}
          label="Select Option"
          onChange={handleChange}
        >
          <MenuItem value={1}>Jan</MenuItem>
          <MenuItem value={2}>Feb</MenuItem>
          <MenuItem value={3}>Mar</MenuItem>
          <MenuItem value={4}>Apr</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>Jun</MenuItem>
          <MenuItem value={7}>Jul</MenuItem>
          <MenuItem value={8}>Aug</MenuItem>
          <MenuItem value={9}>Sep</MenuItem>
          <MenuItem value={10}>Oct</MenuItem>
          <MenuItem value={11}>Nov</MenuItem>
          <MenuItem value={12}>Dec</MenuItem>
        </Select>
      </FormControl>
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
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <TextField variant="standard" label="Search By Name" />
          <Dropdown />
          <PlusButton />
        </Stack>
      </Stack>
      <TableContainer sx={{ maxHeight: 350 }} className="custom-scrollbar">
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ bgcolor: "rgb(53, 22, 87)", color: "#fff" }}
              >
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ bgcolor: "rgb(53, 22, 87)", color: "#fff" }}
              >
                Type
              </TableCell>
              <TableCell
                align="left"
                sx={{ bgcolor: "rgb(53, 22, 87)", color: "#fff" }}
              >
                Date
              </TableCell>
              <TableCell
                align="left"
                sx={{ bgcolor: "rgb(53, 22, 87)", color: "#fff" }}
              >
                Amount
              </TableCell>
              <TableCell
                align="left"
                sx={{ bgcolor: "rgb(53, 22, 87)", color: "#fff" }}
              >
                Note
              </TableCell>
              <TableCell
                align="left"
                sx={{ bgcolor: "rgb(53, 22, 87)", color: "#fff" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const bgColor =
                row.type === "Income" ? "lightcyan" : "antiquewhite";
              return (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ bgcolor: bgColor }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="left" sx={{ bgcolor: bgColor }}>
                    {row.type}
                  </TableCell>
                  <TableCell align="left" sx={{ bgcolor: bgColor }}>
                    {row.date}
                  </TableCell>
                  <TableCell align="left" sx={{ bgcolor: bgColor }}>
                    {row.amount}
                  </TableCell>
                  <TableCell align="left" sx={{ bgcolor: bgColor }}>
                    {row.note}
                  </TableCell>
                  <TableCell align="left" sx={{ bgcolor: bgColor }}>
                    <IconButton onClick={() => handleEdit(row.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack justifyContent={"end"} direction={"row"}>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ p: 2 }}
        />
      </Stack>
    </Paper>
  );
};

export default MyTable;
