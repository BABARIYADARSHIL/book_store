import {
  Breadcrumbs,
  Button,
  Divider,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Searchbar from "../Components/Searchbar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Formik } from "formik";
import * as Yup from "yup";
function handleClick(event) {
  // event.preventDefault();
  console.log("Clicked");
}

function Register() {
  const breadcrumbs = [
    <Link
      to={"/"}
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,

    <Typography key="2" color="text.primary">
      Create an Account
    </Typography>,
  ];
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    conformpassword: "",
  };
  const validate = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    conformpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });
  return (
    <div className="">
      <Header />
      <Searchbar />
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Login or Create an Account
      </Typography>
      <div className="flex items-center justify-center m-6">
        <div className="border-t-2 border-[#f14d54] w-32"></div>
      </div>
      <Typography variant="h6" sx={{ marginTop: "50px", marginLeft: "160px" }}>
        Personal Information
      </Typography>
      <Divider
        sx={{ marginTop: "20px", marginLeft: "160px", marginRight: "160px" }}
      />
      <Typography
        variant="body2"
        sx={{ marginTop: "20px", marginLeft: "160px" }}
      >
        Please enter the following information to create your account
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="flex-1 ml-40 mr-40">
            <div className="grid grid-cols-2 gap-5 mt-5 ">
              <FormControl fullWidth>
                <label>First Name*</label>
                <TextField
                  size="small"
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  sx={{ height: "40px" }}
                />
                {errors.firstname && touched.firstname && errors.firstname}
              </FormControl>
              <FormControl fullWidth>
                <label>Last Name*</label>
                <TextField
                  size="small"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  sx={{ height: "40px" }}
                />
                {errors.lastname && touched.lastname && errors.lastname}
              </FormControl>

              <FormControl fullWidth>
                <label>Email Address*</label>
                <TextField
                  size="small"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  sx={{ height: "40px" }}
                />
                {errors.email && touched.email && errors.email}
              </FormControl>
              <FormControl fullWidth>
                <label>Roles*</label>
                <Select label="Roles" onChange={handleChange} size="small">
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h6" sx={{ marginTop: "70px" }}>
              Login Information
            </Typography>
            <Divider />
            <div className="flex space-x-8 mt-10">
              <FormControl fullWidth>
                <label>Password*</label>
                <TextField
                  type="password"
                  name="password"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </FormControl>
              <FormControl fullWidth>
                <label>Password*</label>
                <TextField
                  type="conformpassword"
                  name="conformpassword"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.conformpassword}
                />
                {errors.conformpassword &&
                  touched.conformpassword &&
                  errors.conformpassword}
              </FormControl>
            </div>

            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{
                color: "white",
                backgroundColor: "#f14d54",
                "&:hover": {
                  backgroundColor: "#f14d54", // Change the hover background color
                },
                marginTop: "60px",
              }}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
      <Footer />
    </div>
  );
}

export default Register;
