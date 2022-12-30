import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { colRef } from "../firebase";
import { getDocs, addDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getDocs(colRef, orderBy("timestamp", "desc"))
      .then((snapShot) => {
        const dbPosts = [];
        snapShot.docs.forEach((doc) => {
          dbPosts.push({ ...doc.data(), id: doc.id });
        });
        setPosts(dbPosts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [posts]);

  const sendPost = (e) => {
    e.preventDefault();

    console.log(user.displayName);
    addDoc(colRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#e7a33e"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
