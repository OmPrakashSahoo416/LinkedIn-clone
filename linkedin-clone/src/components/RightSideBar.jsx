import NewsFeed from "./NewsFeed"


function RightSideBar() {

    return (
        <>
        <div className="rightSideBar flex-[0.2] mt-5 mr-5">
        <div className="newsSection bg-white rounded-lg border p-5 mb-5 border-slate-200">
            <p className="font-semibold text-[#33ACFF]">SinkedIn News</p>

            <ul className="list-disc p-5">
                <li>
                <NewsFeed headline={"Narendra Modi in Bihar highlights: ‘Nalanda is an identity, an honour,’ says PM"} stats={"2 minutes ago, 2 posts about this"}></NewsFeed>
                </li>
                <li>
                <NewsFeed headline={"Actor Darshan may face action for illegally keeping exotic bird at farmhouse"} stats={"24 minutes ago, 81 posts about this"}></NewsFeed>
                </li>
                <li>
                <NewsFeed headline={"Reasi terror attack: J&K Police makes first arrest"} stats={"19 minutes ago, 49 posts about this"}></NewsFeed>
                </li>
                <li>
                <NewsFeed headline={"US lawmakers to meet the Dalai Lama; China urges Biden not to sign Tibet Bill"} stats={"50 minutes ago, 4 posts about this"}></NewsFeed>
                </li>
            </ul>
            

        </div>
        </div>
        </>
    )
}

export default RightSideBar