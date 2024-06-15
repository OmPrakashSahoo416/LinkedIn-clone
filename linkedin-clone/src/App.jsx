import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <>
    <div className="app bg-[#f4f2ee]">

    
      {/* top header like a nav bars  */}
      <Header></Header>

      <div className="appBody flex">
        {/* left side bar */}
        {/* quick links and profile sections on left  */}
        <LeftSideBar></LeftSideBar>

        {/* center feed screen  */}
        {/* center is the feed with post impressions and all  */}
        <Feed></Feed>

        {/* right side bar  */}
        {/* right side is like news and ads  */}
      </div>
      </div>
    </>
  );
}

export default App;
