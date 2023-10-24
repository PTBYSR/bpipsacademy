import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "pIoXuVS0";

const Join = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isSuccess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const submitted = useRef(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
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
    // console.log("Form Data:", formData);
    // await submit({ formData });
    // setSuccess(true);

    // router.push("https://wa.link/ev12sx");
    // setTimeout(() => {
    //   setSuccess(false);
    // }, 3000);
    // submitted.current = true;

    try {
      // Attempt to submit the form data
      console.log("Form Data:", formData);
      await submit({ formData });
      setSuccess(true);
  
      router.push("https://wa.link/ev12sx");
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      submitted.current = true;
    } catch (error) {
      // Handle the error (e.g., display an error message)
      console.error("Error submitting the form:", error);
      alert("internet connection error")
      setLoading(false)
      // You can show an error message to the user here
    }
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
        <div className=" px-5">
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

      <div className="flex">
        {submitted.current ? (
          <>
          
          <div className="bg-lime py-6 px-6 w-full mb-10 mx-5">
            <div className="text-white text-lg font-semibold">Congratulations!</div>
            <div className="text-white">You have successfully submitted your form.</div>
          </div>
          </>
        ) : (
          <form className="md:w-1/2 w-full px-5">
            <div className="flex md:gap-4 md:flex-row flex-col w-full">
              <div className="md:w-1/2">
                <label className="text-lg font-semibold mb-2">First Name</label>
                <input
                  className="w-full border flex border-gray border-opacity-30 py-4 px-3 bg-white mb-4"
                  placeholder="First Name"
                  type="firstName"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2">
                <label className="text-lg font-semibold mb-2">Last Name</label>
                <input
                  className="w-full border flex border-gray border-opacity-30 py-4 px-3 bg-white mb-4"
                  placeholder="Last Name"
                  type="lastName"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="text-lg font-semibold mb-2">Email</label>
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
              <label className="text-lg font-semibold mb-2">Phone number</label>
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
              {submitted.current ? (
                <>
                  <div className="bg-lime text-xs font-inter text-white py-3 px-10 uppercase font-semibold justify-center items-center flex">
                    submitted
                  </div>
                </>
              ) : (
                <>
                  <button
                    disabled={loading}
                    className="bg-red text-xs font-inter text-white py-3 px-10 uppercase font-semibold justify-center items-center flex"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    {!loading ? (
                      <>Submit</>
                    ) : (
                      <>
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className=" h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          {/* <span className="sr-only">Loading...</span> */}
                        </div>
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </form>
        )}

        <div className="md:w-1/2"></div>
      </div>
    </Main>
  );
};

export default Join;
