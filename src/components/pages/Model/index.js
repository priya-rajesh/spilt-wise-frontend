import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function Model() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    description: false,
    date: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const newErrors = {
      name: name.trim() === "",
      email: email.trim() === "",
      description: description.trim() === "",
      date: date.trim() === "",
    };

    setErrors(newErrors);

    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.description &&
      !newErrors.date
    ) {
      // Submit the form
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Description:", description);
      console.log("Date:", date);
      handleClose();
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              const temError = { ...errors };
              temError.name = e.target.value.trim() === "";
              setErrors(temError);
            }}
            error={errors.name}
            helperText={errors.name ? "Name is required" : ""}
          />
          <TextField
            margin="dense"
            id="email"
            label="Amount"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              const temError = { ...errors };
              temError.email = e.target.value.trim() === "";
              setErrors(temError);
            }}
            error={errors.email}
            helperText={errors.email ? "Amount is required" : ""}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              const temError = { ...errors };
              temError.description = e.target.value.trim() === "";
              setErrors(temError);
            }}
            error={errors.description}
            helperText={errors.description ? "Description is required" : ""}
          />
          <TextField
            margin="dense"
            id="date"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              const temError = { ...errors };
              temError.date = e.target.value.trim() === "";
              setErrors(temError);
            }}
            error={errors.date}
            helperText={errors.date ? "Date is required" : ""}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={handleSubmit}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Model;
