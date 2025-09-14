import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "B.Sc. Computer Science Graduate",
          "M.Sc. Applied Data Science Student",
          "Powerlifter 💪",
          "Tech Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
