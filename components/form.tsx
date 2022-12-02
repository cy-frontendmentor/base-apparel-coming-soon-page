"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Form = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [formStatus, setFormStatus] = useState<string | boolean>();
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus("");
        setMessage("");
        formRef.current?.reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const submitHandler = (event: any) => {
    // event.preventDefault();
    // const enteredEmail = emailInputRef.current?.value;
    // fetch("/api/form", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/jason",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setFormStatus(true);
        } else {
          setFormStatus(false);
        }
        setMessage(data.message);
        console.log(message);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className=" relative text-dark-grayish-red"
        ref={formRef}
      >
        <input
          className={`w-full rounded-[28px] bg-transparent py-[10px] pl-6 leading-7 ring-1 ${
            formStatus === false ? "ring-2 ring-soft-red " : "   "
          } ring-desaturated-red placeholder:text-desaturated-red focus:bottom-0 focus:outline-none  md:py-[14px] md:pl-8`}
          type="text"
          name="email"
          id="email"
          ref={emailInputRef}
          placeholder="Email Address"
        />
        {message && (
          <p
            className={`font-13px mt-2 pl-6 text-left  md:pl-8${
              formStatus ? " text-green-500" : " text-soft-red "
            } `}
          >
            {message}
          </p>
        )}
        {message && (
          <Image
            src="/images/icon-error.svg"
            alt="error"
            width={24}
            height={24}
            className=" absolute top-[15px] right-[72px] md:right-[116px]"
          ></Image>
        )}
        <button className=" red-gradient absolute right-0 top-0 translate-x-1 -translate-y-[1.5px] rounded-[28px]  px-7 py-[16px] drop-shadow-[0_15px_20px_rgba(198,110,110,0.2476)] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:h-full hover:after:w-full hover:after:rounded-[28px] hover:after:bg-white hover:after:opacity-50 md:px-[46px] md:py-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;
