"use client";

import React, { useEffect, useState } from "react";

export default function ContactData() {
  const [data, setData] = useState([]);
  const retrieveData = async () => {
    const res = await fetch("api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let resData = await res.json();
    setData(resData.reverse());
  };

  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <div>
      <h1>Contact Data</h1>
      {data.length !== 0 ? (
        data.map((user) => (
          <div className="p-6">
            <div>{user._id}</div>
            <div>{user.fullname}</div>
            <div>{user.email}</div>
            <div>{user.message}</div>
            <div>{user.date}</div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
