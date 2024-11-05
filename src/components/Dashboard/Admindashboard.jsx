import React from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import Alltask from "../others/Alltask";

const Admindashboard = () => {
    
    return (
        <div className="h-screen w-full p-10 bg-gray-900 text-gray-200">
            <Header />
            <Createtask/>
            <Alltask/>
        </div>
    );
};

export default Admindashboard;
