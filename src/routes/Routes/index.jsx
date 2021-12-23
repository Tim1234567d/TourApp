import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
// import Profile from "../../pages/Profile";
import Profile from '../../pages/Profile'
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";


// import Home from "../../components/home/home";
import { PlaceDetai, Home, Tours, AboutKyrgyzstan, Gallery, AboutUs, ContactUs, Blog} from "../../components";

import {CircularProgress,makeStyles,Container,Grid,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
})); 

function RoutesComponent() {
  const classes = useStyles();
  const auth = useAuth(); 

  return auth.isLoaded ? (
    <Switch>
      <Route exact path="/home"> <Home /> </Route>
      <Route exact path="/tour/:topPlacesId"> <PlaceDetai/> </Route>
      <Route exact path="/tours"> <Tours/> </Route>
      <Route exact path="/blog"> <Blog/> </Route>
      <Route exact path="/aboutKyrgyzstan"> <AboutKyrgyzstan/> </Route>
      <Route exact path="/gallery"> <Gallery/> </Route>
      <Route exact path="/aboutUs"> <AboutUs/> </Route>
      <Route exact path="/contactUs"> <ContactUs/> </Route>

      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>

      <GuestRoute path="/login">
        <Login />
      </GuestRoute>
      <GuestRoute path="/registration">
        <Registration />
      </GuestRoute>

      {/* <Route path="/not-found-404">
        <NotFound />
      </Route>
      <Redirect to="/not-found-404" /> */}

    </Switch>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default RoutesComponent;
