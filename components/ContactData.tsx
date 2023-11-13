"use client";

import React, { useEffect, useState } from "react";

export default function ContactData() {
  const [data, setData] = useState([]);
  // READ
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

  // DELETE
  const handleDelete = async (id) => {
    const res = await fetch(`api/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Contact Data</h1>
      {data.length !== 0 ? (
        data.map((user) => (
          <div className="p-6 flex justify-between">
            <div>
              <div>{user._id}</div>
              <div>{user.fullname}</div>
              <div>{user.email}</div>
              <div>{user.message}</div>
              <div>{user.date}</div>
            </div>
            <div
              onClick={() => handleDelete(user._id)}
              className="h-5 w-5 flex justify-center items-center rounded bg-red-800 text-white text-center cursor-pointer"
            >
              X
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
