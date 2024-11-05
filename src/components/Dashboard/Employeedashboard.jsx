import React from "react";
import Header from "../others/Header";
import Tasklistnumber from "../others/Tasklistnumber";
import Tasklist from "../Tasklist/Tasklist";

const Employeedashboard =()=>{
    
    return(
        <div className='p-10 bg-[#1C1C1C] h-screen '>
            <Header/>
            <Tasklistnumber/>
            <Tasklist/>
        </div>
    )
}

export default Employeedashboard;