import React, { useState, useEffect } from "react";

const UseGptRes = (text) => {
  const LOCAL_USER_STORAGE_KEY = "userText";

  const [userText, setUserText] = useState(
    JSON.parse(localStorage.getItem(LOCAL_USER_STORAGE_KEY)) ?? []
  );

  const addUserHandler = (contact) => {
    console.log(contact);
    setUserText([...userText, contact]);
  };

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(
  //     localStorage.getItem(LOCAL_USER_STORAGE_KEY)
  //   );
  //   if (retrieveContacts) {
  //     setContacts(retrieveContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_USER_STORAGE_KEY, JSON.stringify(userText));
  }, [userText]);

  // const [gptText, setGptText] = useState([text]);

  // const response = function (res) {

  //     setGptText(res=>[...res, res]);

  // }

  return [setUserText, userText, addUserHandler];
};

export default UseGptRes;
