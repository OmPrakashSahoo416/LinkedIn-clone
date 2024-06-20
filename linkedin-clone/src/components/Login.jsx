import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import HeaderRightLinks from "./HeaderRightLinks";
import { auth } from "../Firebase";
import { useState } from "react";

function Login({setUser, setImage}) {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePicUrl, setProfilePicUrl] = useState("https://shorturl.at/v4y5w")

    function loginToApp(e) {
        e.preventDefault();
         auth.signInWithEmailAndPassword(email,password).then((userAuth) => {
            setUser(userAuth.user.displayName);
            setImage(userAuth.user.photoURL);
  
          }).catch(err => alert(err.code))
        
        
    }
    function registerToApp(e) {
      e.preventDefault();
        if (!fullName) {
            return alert("Please enter your name")
        }

         auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
          
            userAuth.user.updateProfile({
                displayName:fullName,
                photoURL:profilePicUrl
            }).then(() => {
              console.log(userAuth);
              setUser(userAuth.user.displayName);
              setImage(userAuth.user.photoURL);
              

            })
        }).catch(err => alert(err.code))

        

        
        

        
    }

  return (
    <>
      <div className="login ">
        <div className="loginHeader flex bg-[#f4f2ee] items-center top-0 justify-around p-1">
          <div className="loginHeaderLeft">
            <img
              src="https://rb.gy/4hfqls"
              className="object-contain h-8"
              alt=""
            />
          </div>
          <div className="loginHeaderRight flex">
            <HeaderRightLinks
              Icon={PeopleIcon}
              title="People"
            ></HeaderRightLinks>
            <HeaderRightLinks Icon={WorkIcon} title="Jobs"></HeaderRightLinks>
          </div>
        </div>
        <div className="loginBody flex justify-between items-end">
          <div className="loginForm md:pl-32 pl-10 pt-16">
            <p className="text-5xl font-thin mb-10 w-[75%] text-amber-900">
              Welcome to your professional community
            </p>
            <form action="">
              <label htmlFor="" className="text-sm mb-2 font-medium block">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="p-3 mb-5 w-96 hover:bg-slate-200  rounded-md border border-slate-800"
                name=""
                placeholder=""
                id="name"
              />
              <label htmlFor="" className="text-sm mb-2  font-medium block">
                Profile Pic URL
              </label>
              <input
                type="text"
                value={profilePicUrl}
                onChange={e => setProfilePicUrl(e.target.value)}
                className="p-3 mb-5 w-96 hover:bg-slate-200 rounded-md border border-slate-800"
                name=""
                placeholder=""
                id="profPic"
              />
              <label htmlFor="" className="text-sm mb-2 font-medium block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="p-3 mb-5 w-96 hover:bg-slate-200 rounded-md border border-slate-800"
                name=""
                placeholder=""
                id="email"
              />
              <label htmlFor="" className="text-sm mb-2 font-medium block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-3 mb-5 hover:bg-slate-200 w-96 block rounded-md border border-slate-800"
                name=""
                placeholder=""
                id="pass"
              />

              <input
                type="submit"
                onClick={loginToApp}
                className=" p-3 w-40 mr-16 font-medium cursor-pointer hover:bg-slate-200 hover:text-[#0a66c2]  text-center bg-[#0a66c2] text-slate-200 rounded-md"
                value="Sign In"
              />
              <input
                type="submit"
                onClick={registerToApp}
                className=" p-3 w-40 font-medium  cursor-pointer text-center hover:bg-[#0a66c2] hover:text-slate-200 text-[#0a66c2] bg-slate-200 rounded-md"
                value="Sign Up"
              />
            </form>
          </div>
          <div className="loginImage ">
            <img src="https://rb.gy/82ex8e" className="lg:inline hidden" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
