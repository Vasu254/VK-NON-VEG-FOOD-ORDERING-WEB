import React from "react";
import { useState, useEffect } from "react";

export default function Background() {
  let arr = [
    "Find the best restaurents",
    "Order them ",
    "enjoy the taste and service",
  ];
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState(arr[count % 3]);

  useEffect(() => {
    // Use setTimeout to change the text after 1000 milliseconds (1 second)
    const timer = setTimeout(() => {
      setDisplayText(arr[count]);
      setCount(count + 1);
      if (count === 3) {
        setCount(0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div class="container mt-3 content">
        <h1 className="m-3">Vasu-Foods</h1>
        <ol>
          <li>{displayText}</li>
          <h5 className="p-4">Order food from favourite restaurants near you.</h5>
        </ol>
      </div>
     
     
    </>
  );
}
