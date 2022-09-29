import Header from "./Header";
import {useState} from "react";
import axios from "axios";

function Register(){
    const [userData, setUserData]= useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        password2:""
    })

const { firstname, lastname, email, password, password2}=userData;
const onChangeHandler =(e)=>{
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })
}
function Register() {
    return (
        <>
            <h1>Register component</h1>
            <Header />
            <centre>
            <img src="http://cdn.shopify.com/s/files/1/0656/2283/5457/products/subtle-art-of-not-giving-a-fuck-delhi-book-market-663046.jpg?v=1659040308" alt="W3Schools.com" style={{width:'10%'}}></img>
            <br></br>
            <br></br>
            <br></br>
            <div className="form">
                <form>
                    <label htmlfor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label htmlfor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />
                    <label htmlfor="email">email:</label><br />
                    <input type="email" id="email" name="email" /><br />
                    <label htmlfor="password">password:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <label htmlfor="password2">confirm password:</label><br />
                    <input type="password" id="password2" name="password2" /><br />
                    <input type="submit" value="Submit"></input>

                </form>
            </div>
            </centre>
        </>
    )
}
}
export default Register;