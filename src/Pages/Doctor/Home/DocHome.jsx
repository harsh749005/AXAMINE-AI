import React from "react";
import { logout } from "../../../utils/authHelpers";
const DocHome =()=>{
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"40px"}}>
            <p style={{width:"max-content"}}>
                DocDashboard comming soon ...
                </p>
                <div  style={{cursor:"pointer",backgroundColor:"blue",color:"white",padding:"5px"}} onClick={logout}>Logout</div>
        </div>
    )
}
export default DocHome