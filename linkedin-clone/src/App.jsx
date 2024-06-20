import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

function App() {
  const [user,setUser] = useState("");
  const [image,setImage] = useState("https://shorturl.at/v4y5w");

  useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          // Login 
          setUser(userAuth.displayName);
          setImage(userAuth.photoURL);

        } else {
          // Logout
          setUser("");
          setImage("");
        }
      })
  }, [])
  
  return (
    <>
      <div className="app ">
        {/* top header like a nav bars  */}
        
        {!user ? <Login setImage={setImage} setUser={setUser}></Login> : (
          <>
            <Header image={image}></Header>
          <div className="appBody bg-[#f4f2ee] md:flex md:justify-center">
            {/* left side bar */}
            {/* quick links and profile sections on left  */}
            <LeftSideBar name={user} image={image}></LeftSideBar>

            {/* center feed screen  */}
            {/* center is the feed with post impressions and all  */}
            <Feed user={user} image={image} email={auth.currentUser.email}></Feed>

            {/* right side bar  */}
            {/* right side is like news and ads  */}
            <RightSideBar></RightSideBar>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
