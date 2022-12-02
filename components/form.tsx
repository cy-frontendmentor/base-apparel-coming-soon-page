"use client";

import { use, useRef, useState } from "react";

const Form = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [formStatus, setFormStatus] = useState(true);
  const [message, setMessage] = useState("");
  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(emailInputRef.current?.value);
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className=" relative text-dark-grayish-red"
      >
        <input
          className={`w-full rounded-[28px] bg-transparent py-[10px] pl-6 leading-7 ring-1 ring-desaturated-red placeholder:text-desaturated-red focus:bottom-0 focus:outline-none md:h-[56px] md:py-[14px] md:pl-8`}
          type="text"
          name="email"
          id="email"
          ref={emailInputRef}
          placeholder="Email Address"
        />
        {formStatus && (
          <p className={`font-13px mt-2 pl-6 text-left `}>sfsdfsf</p>
        )}
        <button
          className=" red-gradient absolute right-0 top-0 translate-x-1 rounded-[28px]  px-7 py-[15px] drop-shadow-[0_15px_20px_rgba(198,110,110,0.2476)] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:h-full hover:after:w-full hover:after:rounded-[28px] hover:after:bg-white hover:after:opacity-50 md:h-[57px]
         md:px-[46px] md:py-[19px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;
