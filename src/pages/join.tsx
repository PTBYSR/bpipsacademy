import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Join = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData.firstName);
    console.log([
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phoneNumber,
    ]);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber
    ) {
      alert("Please fill all the fields.");
      return;
    }
    // Handle form submission here (e.g., send data to the server)
    console.log("Form Data:", formData);
    setSuccess(true);
    router.push("https://wa.link/ev12sx");
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className=" mt-10 flex items-center">
        <div className="md:px-20 px-5">
          <div className="text-violet ml-2 font-inter uppercase text-xs  opacity-90">
            get started
          </div>
          <h1 className=" text-violet text-4xl md:text-6xl font-prompt uppercase font-bold leading-[60px] md:leading-[80px]">
            join the hunt
          </h1>
        </div>
      </div>
      <div className=" font-inter text-violet md:w-2/3 px-5 mb-10 mt-2">
        Sign up now to begin your forex journey with us
      </div>

      <form className="w-full px-5">
        <div className="flex md:gap-4 md:flex-row flex-col w-full">
          <input
            className="w-full border flex border-gray border-opacity-30 py-4 px-3 bg-white mb-4"
            placeholder="First Name"
            type="firstName"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="w-full border flex border-gray border-opacity-30 py-4 px-3 bg-white mb-4"
            placeholder="Last Name"
            type="lastName"
            id="lastName"
            name="lastName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            placeholder="Email"
            className="w-full border flex border-gray border-opacity-30 py-4 px-3 bg-white mb-4"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Phone Number"
            className="w-full border flex border-gray border-opacity-30 py-4 px-3 bg-white mb-4"
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="justify-center flex w-full items-center mt-5 mb-10">
          <button
            className="bg-red text-xs font-inter text-white py-3 px-10 uppercase font-semibold"
            onClick={handleSubmit}
            type="submit"
          >
           Submit
          </button>
        </div>
      </form>
    </Main>
  );
};

export default Join;
