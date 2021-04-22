import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../Components/Home/Home";
import { UsPolitics } from "../Components/UsPolitics/UsPolitics";
import { Business } from "../Components/Business/Business";
import { Health } from "../Components/Health/Health";
import { Entertainment } from "../Components/Entertainment/Entertainment";
import { StylePage } from "../Components/Style/StylePage";
import { Travel } from "../Components/Travel/Travel";
import { Sports } from "../Components/Sports/Sports";
import { SportsLinksPage } from "../Components/Sports/SportsLinksPage";
import { Videos } from "../Components/Videos/Videos";
import { World } from "../Components/World/World";
import { Footer } from "../Components/Footer/Footer";
import { Article } from "../Components/Style/Article";
import { WorldDetails } from "../Components/World/WorldDetails";
import { Africa } from "../Components/World/Pages/Africa";
import { America } from "../Components/World/Pages/America";
import { China } from "../Components/World/Pages/China";
import { Europe } from "../Components/World/Pages/Europe";
import { Asia } from "../Components/World/Pages/Asia";
import { India } from "../Components/World/Pages/India";
import { Australia } from "../Components/World/Pages/Australia";
import { Middle } from "../Components/World/Pages/Middle";
import { Error } from "../Components/Error/Error";
import { HealthLinksPage } from "../Components/Health/HealthLinksPage";
import { HomeLinksPage } from "../Components/Home/HomeLinksPage";
import { Profile } from "../Components/Profile/Profile";
import { AfricaDetails } from "../Components/World/Pages/AfricaDetails";
import { AmericaDetails } from "../Components/World/Pages/AmericaDetails";
import { AsiaDetails } from "../Components/World/Pages/AsiaDetails";
import { BusinessCard } from "../Components/Business/BusinessCard";
import { Navbar } from "../Components/Navbar/Navbar";
import { StickyTop } from "../Components/Home/StickyTop";
import { PrivateRoute } from "./PrivateRoute";

import { EntertainmentCard } from "../Components/Entertainment/EntertainmentCard";
import { EditEntertainment } from "../Components/Entertainment/EditEnternainment";
import { Login } from "../Components/Profile/Login";
import { Registration } from "../Components/Profile/Registration";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home/:publishedAt">
          <HomeLinksPage />
        </Route>
        <Route exact path="/world">
          <World />
        </Route>
        <Route exact path="/uspolitics">
          <UsPolitics />
        </Route>

        <Route exact path="/business">
          <Navbar />
          <Business />
        </Route>
        <Route exact path="/business/:publishedAt">
          <Navbar />

          <BusinessCard />
        </Route>
        <Route exact path="/health">
          <Health />
        </Route>
        <Route exact path="/health/:publishedAt">
          <HealthLinksPage />
        </Route>
        <Route exact path="/entertainment">
          <Navbar />
          <Entertainment />
        </Route>
        <Route exact path="/entertainment/:publishedAt">
          <Navbar />
          <EntertainmentCard />
        </Route>
        <Route exact path="/edit/:id">
          <Navbar />
          <EditEntertainment />
        </Route>

        <Route exact path="/style">
          <StylePage />
        </Route>
        <Route exact path="/travel">
          <Travel />
        </Route>
        <Route exact path="/sports">
          <Sports />
        </Route>
        <Route exact path="/sports/:publishedAt">
          <SportsLinksPage />
        </Route>
        <Route exact path="/videos">
          <Videos />
        </Route>
        <Route exact path="/footer">
          <Footer />
        </Route>
        <Route exact path="/style/:id">
          <Article />
        </Route>
        <Route path="/world/:id">
          <WorldDetails></WorldDetails>
        </Route>
        <Route path="/africa/:id">
          <AfricaDetails></AfricaDetails>
        </Route>

        <Route path="/searchpage">
          <StickyTop />
        </Route>

        <Route path="/africa" exact>
          <Africa></Africa>
        </Route>
        <Route path="/america" exact>
          <America></America>
        </Route>
        <Route path="/america/:id">
          <AmericaDetails></AmericaDetails>
        </Route>
        <Route path="/asia" exact>
          <Asia></Asia>
        </Route>

        <Route path="/asia/:id" exact>
          <AsiaDetails></AsiaDetails>
        </Route>
        <Route path="/australia" exact>
          <Australia></Australia>
        </Route>
        <Route path="/china" exact>
          <China></China>
        </Route>
        <Route path="/europe" exact>
          <Europe></Europe>
        </Route>
        <Route path="/india" exact>
          <India></India>
        </Route>
        <Route path="/middleeast" exact>
          <Middle></Middle>
        </Route>

        <Route path="/unitedkingdom" exact>
          <Middle></Middle>
        </Route>
        <PrivateRoute exact path="/profile">
          <Profile></Profile>
        </PrivateRoute>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };
