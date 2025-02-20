import React from "react";

const Button = (props) => {
  return (
    <div className=" px-4 py-3 hover:gap-8 transition-all ease-in hover:scale-105 gap-4 border-2 w-fit flex items-center border-black rounded-full">
      {props.btnText}{" "}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.1 15.17"
          class="w-4"
        >
          <path
            d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default Button;
