import style from "./FriendsListitem.module.css";

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={`${style.status} ${isOnline ? style.online : style.offline}`}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};
