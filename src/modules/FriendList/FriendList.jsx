export const FriendList = ({ id, isOline, avatar, name }) => {
  return (
    <li key={id}>
      <span class="status">{isOline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
