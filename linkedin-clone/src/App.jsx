import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Login from "./components/Login";

function App() {
  const user = "";

  return (
    <>
      <div className="app ">
        {/* top header like a nav bars  */}
        
        {!user ? <Login></Login> : (
          <>
            <Header></Header>
          <div className="appBody bg-[#f4f2ee] flex justify-center">
            {/* left side bar */}
            {/* quick links and profile sections on left  */}
            <LeftSideBar></LeftSideBar>

            {/* center feed screen  */}
            {/* center is the feed with post impressions and all  */}
            <Feed></Feed>

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
