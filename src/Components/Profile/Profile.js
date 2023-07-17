import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <p> Username : {user.Username} </p>
      <p> Password : {user.Password} </p>
      <p> Age : {user.Age} </p>
    </div>
  );
};

export default Profile;
