import Image from "next/image";
import Form from "../components/form";
const page = () => {
  return (
    <div className="  mx-auto grid max-w-[1440px] md:mt-[80px] md:grid-cols-[auto_42%] md:grid-rows-[min-content_1fr] ">
      <div className="md: py-8 pl-8 md:mr-[55px] md:w-[445px] md:justify-self-center md:p-0  md:pt-[75px]">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={20}
        ></Image>
      </div>
      {/* image */}
      <div className=" w-full  bg-hero-banner-mb bg-cover  bg-center bg-no-repeat pt-[66%] md:row-span-2   md:bg-hero-banner-dt md:bg-left md:pt-[800px]"></div>
      {/* content */}
      <div className="md: md:text-lef px-8 pt-16 pb-[71px] text-center  md:mr-[55px] md:max-w-[445px] md:justify-self-center md:p-0 md:pt-[137px] md:pb-[152px] md:text-left">
        <div className="mb-8 grid gap-y-4 md:mb-10 md:gap-y-8">
          <div>
            <h1 className="text-[40px] font-light uppercase leading-[42px] tracking-[10.83px] text-desaturated-red">
              We&apos;re
            </h1>
            <h1 className=" text-[40px] uppercase leading-[42px]  tracking-[10.83px] text-dark-grayish-red  ">
              coming soon
            </h1>
          </div>
          <p className="text-sm text-desaturated-red ">
            Hello fellow shoppers! We&apos; re currently building our new
            fashion store. Add your email below to stay up-to-date with
            announcements and our launch deals.
          </p>
        </div>
        <Form></Form>
      </div>
    </div>
  );
};

export default page;
