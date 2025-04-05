import style from "./FriendsList.module.css"
import { FriendsListItem } from "./FriendsListItem/FriendsListItem";

export const FriendsList = ({ friends }) => {
  return (
    <ul class={style.friendList}>
      {friends.map((el) => (
        <FriendsListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
