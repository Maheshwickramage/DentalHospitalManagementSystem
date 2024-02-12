import React from "react";
import Login from "./components/Login1";
import Register from "./components/Register";
import "./App.css";

import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import ViewDoctors from "./components/ViewDoctors";
import ViewDoctors2 from "./components/ViewDoctors2";
import AddDoctors from "./components/AddDoctors";
import Footer from "./components/Footer";
import PatientOppoinments from "./components/PatientOppoinments";
import EditDoctors from "./components/EditDoctors";
import Login1 from "./components/Login1";
import SignUp2 from "./components/SignUp2";
import SignIn2 from "./components/SignIn2";

const App = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/loggin" element={<Home/>} ></Route> 
                    <Route path="/signup" element={<SignUp/>} ></Route> 
                    <Route path="/signin" element={<SignIn/>} ></Route> 
                    <Route path="/signin2" element={<SignIn2/>} ></Route> 
                    <Route path="/addoctors" element={<AddDoctors/>} ></Route> 
                    <Route path="/viewdoctors" element={<ViewDoctors/>} ></Route> 
                    <Route path="/viewdoctors2" element={<ViewDoctors2/>} ></Route> 
                    <Route path="/editdoctors" element={<EditDoctors/>} ></Route> 
                    <Route path="/patientoppoinments" element={ <PatientOppoinments/>} ></Route> 
                    <Route path="/doctors" element={<ViewDoctors />}></Route>
                    <Route path="/doctors" element={<ViewDoctors />}></Route>
                    <Route path="/signup2" element={<SignUp2 />}></Route>
                    <Route path="/" element={<Login1 />}></Route>
                   
                   
                   
                   
                   
                   
                  

                     <Route path="/editdoctors/:id" element={<EditDoctors />} />
                </Routes>
               
                <Footer />
            </Router>
        </div>

    );
};

export default App;
