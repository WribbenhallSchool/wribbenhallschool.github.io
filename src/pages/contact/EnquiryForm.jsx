import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const EnquiryForm = ({ send }) => {
  const initialFormState = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formData, updateFormData] = useState(initialFormState);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    send(formData);
    document.getElementById("enquiry-form").reset();
    updateFormData(initialFormState);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} id="enquiry-form">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Make an Enquiry
          </Typography>
          <TextField
            style={{ margin: "5px" }}
            onInput={handleChange}
            label="Your Full Name"
            name="fullName"
            required
            variant="standard"
            fullWidth
          />
          <br />
          <TextField
            style={{ margin: "5px" }}
            label="Your Email"
            required
            onInput={handleChange}
            name="email"
            type="email"
            variant="standard"
            fullWidth
          />
          <br />
          <br />

          <TextField
            style={{ margin: "5px" }}
            placeholder="Your message"
            onInput={handleChange}
            name="message"
            required
            multiline
            rows={3}
            fullWidth
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          form="enquiry-form"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default EnquiryForm;
