import React, {useState} from "react";
import ShareIcon from "../Icon/Share.svg";
import FavoriteIcon from "../Icon/Favorite.svg";
import classNames from "classnames";

export const Action = (props) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event) => {
    setClickCount(clickCount + 1);

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return props.children ? (
    <button onClick={handleClick}>
      {props.children} ({clickCount})
    </button>
  ) : null;
};

export async function likeAndShare(postId) {
  const apiUrl = postId ? "posts" : "error";

  const response = await fetch(`https://jsonplaceholder.typicode.com/${apiUrl}`, {
    method: 'POST',
    body: JSON.stringify({
      id: postId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  const json = await response.json();

  return json.id;
}

export const FavoriteAction = (props) => {
  const [liked, setLike] = useState(false);

  async function handleClick() {
    const currentLiked = liked;

    setLike(!currentLiked);

    if (!props.postId) {
      return
    }

    const id = await likeAndShare(props.postId);

    if (typeof id === "number") {
      setLike(!currentLiked);
    } else {
      alert("error");
    }
  }

  return props.postId ? (
    <Action onClick={handleClick}>
      <img src={FavoriteIcon} alt="" className={classNames("favoriteIcon", {
        active: liked
      })}/>
    </Action>
  ) : null;
};

export const ShareAction = (props) => {
  const [shared, setShared] = useState(false);

  async function handleClick() {
    const currentShared = shared;

    setShared(!currentShared);

    if (!props.postId) {
      return
    }

    const id = await likeAndShare(props.postId);

    if (typeof id === "number") {
      setShared(!currentShared);
    } else {
      alert("error");
    }
  }

  return props.postId ? (
    <Action onClick={handleClick}>
      <img src={ShareIcon} alt="" className={classNames("shareIcon", {
        active: shared
      })}/>
    </Action>
  ) : null;
};