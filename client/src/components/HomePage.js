// src/components/HomePage.js
import React from "react";
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Link,
  Slider,
} from "@material-ui/core";
import ImageSlider from "./ImageSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  imageSlider: {
    marginBottom: theme.spacing(4),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 200,
  },
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const locations = [
    { label: "New York", value: "new-york" },
    { label: "Los Angeles", value: "los-angeles" },
    { label: "Chicago", value: "chicago" },
    { label: "San Francisco", value: "san-francisco" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Car/Loans Lead Gen</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h4" align="center" className={classes.header}>
          Find Your Dream Car
        </Typography>
        <Grid container justify="center" className={classes.imageSlider}>
          {/* Add your image slider component here */}
          <ImageSlider
            images={[
              "https://wallpaperaccess.com/full/475028.jpg",
              "https://cdn.wallpapersafari.com/20/32/iHu37d.jpg",
              "https://wallpaperaccess.com/full/276819.jpg",
            ]}
          />
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="location-label">Location</InputLabel>
                <Select labelId="location-label" id="location-select" required>
                  {locations.map((location) => (
                    <MenuItem key={location.value} value={location.value}>
                      {location.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Add additional form fields as needed */}
          </Grid>
        </form>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Car/Loans Lead Gen.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link href="#">Privacy Policy</Link> |{" "}
          <Link href="#">Terms of Service</Link>
        </Typography>
      </footer>
    </div>
  );
};

export default HomePage;
