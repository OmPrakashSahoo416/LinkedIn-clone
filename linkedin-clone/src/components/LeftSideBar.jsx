import RecentVisitedGroups from "./RecentVisitedGroups";

function LeftSideBar({name, image}) {

  return (
    <>
      <div className="leftSideBar flex-[0.15] mt-5 mr-5 top-20">
        {/* top with account details post impressions stats and all  */}
        <div className="leftSideBarTop border border-slate-200 bg-white mb-3 flex items-center flex-col text-center rounded-lg">
          {/* account section  */}
          <div className="leftSideBarAccount mb-4 flex items-center flex-col ">
            {/* background image of account  */}
            <img src="../public/linkedcover.jpg" className="w-[100%] rounded-t-lg h-16 mb-[-30px] object-cover" alt="" />

            {/* account image */}
            <img
              src={image}
              className="rounded-full object-contain mb-2 ring-2 ring-white !h-[64px]"
            ></img>

            {/* User name  */}
            <h3 className="font-semibold text-slate-800">{name}</h3>

            {/* User intro lines */}
            <p className="text-[12px] p-3 text-slate-600">
              Associate Engineer @HSC | Tech Enthusiast | Codechef 3*(1600+) |
              Codeforces Pupil(1350+)
            </p>
          </div>

          {/* post impression section  */}
          <div className="leftSideBarStats mb-5 p-4 border-t w-[100%] border-slate-200 flex flex-col">
            {/* profile view counts */}
            <div className="leftSideBarStatsViewCt flex mt-4 justify-between">
              <p  className="font-semibold text-sm  text-slate-600">Profile Viewers</p>
              <p className="text-sky-600 text-sm font-semibold">19</p>
              
            </div>

            {/* post impression counts  */}
            <div className="leftSideBarStatsImpCt mt-2 flex justify-between">
              <p className="font-semibold text-sm text-slate-600">Post Impressions</p>
              <p className="text-sky-600 text-sm font-semibold">54</p>
            </div>
          </div>
        </div>

        {/* bottom with some recent bookmarks and all sections  */}
        <div className="leftSideBarBottom border border-slate-200 bg-white mb-3 p-3 rounded-lg">
          <div className="leftSideBarBottomRecent">
            <p className="text-sm mb-1">Recent</p>
            <RecentVisitedGroups title={"Indie Games Developer"} />
            <RecentVisitedGroups title={"Blender Artist Open Group"} />
            <RecentVisitedGroups title={"Artificial Intelligence"} />
            <RecentVisitedGroups title={"Entrepreneur News Network"} />
            <RecentVisitedGroups title={"Virtual Reality Network"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
