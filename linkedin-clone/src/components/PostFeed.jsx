import PostInput from "./PostInput";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Chat from '@mui/icons-material/ChatOutlined';
import Repeat from '@mui/icons-material/RepeatOutlined';
import Send from '@mui/icons-material/SendRounded';

function PostFeed({name,description, textContent}) {
  return (
    <>
    <div className="post mb-3">

      <div className="postsHeader mb-3 flex items-center">
        <img
          src="../public/avatar_2.jpg"
          className="rounded-full object-contain mr-3 !h-[38px]"
        ></img>
        <div className="postHeaderDesc w-1/2">

        <p className="font-semibold text-slate-800 text-sm">{name}</p>
        <p className="text-[12px] h-5 overflow-hidden text-ellipsis whitespace-nowrap  text-slate-600">{description}</p>
        </div>
        
      </div>
      <div className="postContent mb-3">
            <p className="text-sm break-all">{textContent}</p>
            {/* to add image or video  */}
            <img src="" alt="" />
            

        </div>
        <hr />
        <div className="postImpression flex justify-evenly mt-1">
            
            <PostInput title={"Like"} Icon={ThumbUpAltOutlinedIcon} color={"DarkSlateGray"} />
            <PostInput title={"Comment"} Icon={Chat} color={"DarkSlateGray"} />
            <PostInput title={"Repost"} Icon={Repeat} color={"DarkSlateGray"} />
            <PostInput title={"Send"} Icon={Send} color={"DarkSlateGray"} />
        </div>
    </div>
    </>
  );
}
export default PostFeed;
