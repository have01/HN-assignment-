import React from "react";

export default function Input({ value, setValue }) {
  return (
    <div>
      <input
        className="input"
        type={"search"}
        placeholder="Search Hacker News"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}
