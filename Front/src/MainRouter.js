﻿import {Route, Switch} from "react-router-dom";
import Home from "./Views/Home/Home";
import Feed from "./Views/Feed/Feed";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import Card from "./Views/Card/Card";
import NewCard from "./Views/NewCard/NewCard";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/feed" component={Feed}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/card" component={Card}></Route>
            <Route exact path="/new-card" component={NewCard}></Route>
            {/*
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword} />
            <PrivateRoute exact path="/post/create" component={NewPost}></PrivateRoute>
            <Route exact path="/post/:postId" component={SinglePost}></Route>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}></PrivateRoute>
            <PrivateRoute exact path="/user/findpeople/:userId" component={FindPeople}></PrivateRoute>
            <PrivateRoute path="/user/:userId" component={Profile}></PrivateRoute>
            <PrivateRoute exact path="/post/edit/:postId" component={EditPost}></PrivateRoute>
            */}
        </Switch>
    </div>
);

export default MainRouter;