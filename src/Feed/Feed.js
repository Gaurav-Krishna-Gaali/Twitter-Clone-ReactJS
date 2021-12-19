import React from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
function Feed() {
  return (
    <div>
      {/* header  */}
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <TweetBox />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      {/* tweetbox */}

      {/* post */}
    </div>
  );
}

export default Feed;
