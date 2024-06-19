import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import HeaderRightLinks from "./HeaderRightLinks";
import { auth } from "../Firebase";
import { useState } from "react";

function Login() {
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePicUrl, setprofilePicUrl] = useState('')

    function loginToApp(e) {
        e.preventDefault();
        auth
        
    }
    function registerToApp() {
        if (!fullName) {
            return alert("Please enter your name")
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:fullName,
                photoURL:profilePicUrl
            }).then(() => {

            })
        }).catch(err => console.log(err))

        
    }

  return (
    <>
      <div className="login ">
        <div className="loginHeader flex bg-[#f4f2ee] items-center top-0 justify-around p-1">
          <div className="loginHeaderLeft">
            <img
              src="../public/linkedinlong.png"
              className="object-contain h-8"
              alt=""
            />
          </div>
          <div className="loginHeaderRight flex">
            <HeaderRightLinks Icon={HomeIcon} title="Home"></HeaderRightLinks>
            <HeaderRightLinks
              Icon={PeopleIcon}
              title="My Network"
            ></HeaderRightLinks>
            <HeaderRightLinks Icon={WorkIcon} title="Jobs"></HeaderRightLinks>
          </div>
        </div>
        <div className="loginBody flex items-center">
          <div className="loginForm pl-32 pt-16">
            <p className="text-5xl font-thin mb-10 text-amber-900">
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
                id=""
              />
              <label htmlFor="" className="text-sm mb-2  font-medium block">
                Profile Pic URL
              </label>
              <input
                type="text"
                value={profilePicUrl}
                onChange={e => setprofilePicUrl(e.target.value)}
                className="p-3 mb-5 w-96 hover:bg-slate-200 rounded-md border border-slate-800"
                name=""
                placeholder=""
                id=""
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
                id=""
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
                id=""
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
            <img src="../public/login_image.svg" className="mt-16 " alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
