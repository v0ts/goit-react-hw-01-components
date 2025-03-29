import { FriendsListItem } from "./FriendsListItem/FriendsListItem";

export const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
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
