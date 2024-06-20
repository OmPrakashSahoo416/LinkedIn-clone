import PostInput from "./PostInput";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ArticleIcon from "@mui/icons-material/Article";
import PostFeed from "./PostFeed";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import firebase from "firebase/compat/app";

function Feed({user, image}) {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  function sendPost(e) {
    e.preventDefault();

    db.collection("posts").add({
      name: user,
      desc: "I am a comedian",
      profPic: image,
      msg: postText,
      img: imageSrc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <>
      <div className="feed flex-[0.4] mt-5 mr-5 top-20">
        {/* input field to input images or anything to create a post  */}
        <div className="feedInputBox bg-white rounded-lg border p-5 mb-5 border-slate-200">
          {/* profile pic and input text field  */}
          <div className="inputText flex mb-5 items-center">
            <img
              src={image}
              className="rounded-full object-contain mr-3 !h-[40px]"
            ></img>
            {/* creating a form so that we can submit on enter */}
            <form action="" className="w-[100%]">
              <input
                type="text"
                className="p-2 pl-5 w-[100%] border focus:outline-none focus:text-slate-600 border-slate-400 rounded-full"
                name=""
                placeholder="Start a post!"
                id=""
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
              <input type="url" className="p-2 pl-5 mt-2 w-[100%] italic border focus:outline-none focus:text-slate-600 border-slate-400 rounded-full" onChange={(e) => setImageSrc(e.target.value)} value={imageSrc} name="" pattern={"https://.*" || "data:image/.*" }placeholder="Image URL" id="" />
              <button onClick={sendPost} type="submit"></button>
            </form>
          </div>

          {/* to input media and other kind of stuffs  */}
          <div className="inputMedia flex justify-around">
            <PostInput title={"Media"} Icon={PermMediaIcon} color={"#33ACFF"} />
            <PostInput
              title={"Contribute Expertise"}
              Icon={FileOpenIcon}
              color={"DarkGoldenRod"}
            />
            <PostInput
              title={"Write Article"}
              Icon={ArticleIcon}
              color={"Crimson"}
            />
          </div>
        </div>

        {posts.map((post) => (
          <PostFeed
            key={post.id}
            name={post.data.name}
            profileImg={post.data.profPic}
            description={post.data.desc}
            textContent={post.data.msg}
            imageLink={post.data.img}
          />
        ))}

        {/* feed or posts of persons with their names icons images texts everything  */}
        {/* <div className="postFeed "> */}
        {/* posts header section with icon and name and description  */}

        {/* <PostFeed
            name={"Om Prakash Sahoo"}
            description={
              "Associate Engineer @HSC | Tech Enthusiast | Codechef 3* (1600+) | Codeforces Pupil (1350+)"
            }
            textContent={
              "Happy Father’s Day to all you dads out there working hard to give your families a better life. Sometimes the struggle is hard and often it’s lonely but in the end, that one smile on your child’s face makes it all worthwhile."
            }>
          </PostFeed> */}
      </div>
    </>
  );
}
export default Feed;
