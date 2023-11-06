import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [thanks, setThanks] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_9uxer1v",
        "template_gl2s1kq",
        form.current,
        "5MS_p9SgVmRMrADZV"
      )
      .then(
        (result) => {
          setThanks(true);
          setTimeout(() => {
            setThanks(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="flex justify-center mb-20 mt-20">
        <div className="typewriter">
          <h1 className=" font-extrabold">Contact Me!</h1>
        </div>
      </div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg  px-6 py-12  dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                <a
                  href="https://www.linkedin.com/in/moha-alawneh/"
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <img
                      width="48"
                      className=" ml-auto mr-auto"
                      height="48"
                      src="https://img.icons8.com/color/48/linkedin-circled--v1.png"
                      alt="linkedin-circled--v1"
                    />
                    <h6 className="font-medium text-white">Linkedin</h6>
                  </div>
                </a>
                <a
                  href="https://github.com/MohAlawneh"
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <img
                      className=" ml-auto mr-auto"
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/github--v1.png"
                      alt="github--v1"
                    />
                    <h6 className="font-medium text-white">Github</h6>
                  </div>
                </a>
                <a
                  href="tel:+962786482809"
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <div className="mx-auto mb-6 text-center md:mb-0">
                    <img
                      className=" ml-auto mr-auto"
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/apple-phone.png"
                      alt="apple-phone"
                    />
                    <h6 className="font-medium text-white">
                      + 962 78 6482 809
                    </h6>
                  </div>
                </a>
                <a
                  className=" cursor-pointer"
                  href="mailto:mohammadwalid.alawneh@gmail.com"
                  target="_blank"
                >
                  <div className="mx-auto text-center">
                    <img
                      className=" ml-auto mr-auto"
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/gmail--v1.png"
                      alt="gmail--v1"
                    />
                    <h6 className="font-medium text-white">
                      mohammadwalid.alawneh@gmail.com
                    </h6>
                  </div>
                </a>
              </div>
              <div className="mx-auto max-w-[700px]">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label htmlFor="exampleInput90">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-message"
                      id="exampleInput90"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label htmlFor="exampleInput91">Email address</label>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-message"
                      id="exampleInput91"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                      name="message"
                    ></textarea>
                  </div>
                  <button
                    onClick={sendEmail}
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block bg-[wheat] w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                  >
                    Send
                  </button>
                </form>
                {thanks && (
                  <div className="flex justify-center mt-20 text-green-600">
                    <div className="typewriter">
                      <h1 className=" font-extrabold ">
                        Thank You I Will Reply ASAP 😍😍
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactMe;
