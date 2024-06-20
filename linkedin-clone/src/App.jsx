import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [user,setUser] = useState("");
  const [image,setImage] = useState("https://shorturl.at/v4y5w");
  
  return (
    <>
      <div className="app ">
        {/* top header like a nav bars  */}
        
        {!user ? <Login user={user} setImage={setImage} setUser={setUser}></Login> : (
          <>
            <Header image={image}></Header>
          <div className="appBody bg-[#f4f2ee] flex justify-center">
            {/* left side bar */}
            {/* quick links and profile sections on left  */}
            <LeftSideBar name={user} image={image}></LeftSideBar>

            {/* center feed screen  */}
            {/* center is the feed with post impressions and all  */}
            <Feed user={user} image={image}></Feed>

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
