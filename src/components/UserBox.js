import React, { useEffect } from "react";
import UseGptRes from "../Hooks/UseGptRes";

const UserBox = ({ value }) => {
  const [setUserText, userText] = UseGptRes();

  const LOCAL_USER_STORAGE_KEY = "userText";

  useEffect(() => {
     {
      const retrieveUserText = JSON.parse(
        localStorage.getItem(LOCAL_USER_STORAGE_KEY)
      );
      if (retrieveUserText) {
        setUserText(retrieveUserText);
      }
    }
  }, setUserText);

  return (
    <>
      <p id="userbox">
        User
        <br />
        {value}
      </p>
    </>
  );
};

export default UserBox;
