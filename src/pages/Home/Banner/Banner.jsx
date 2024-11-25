import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-5 bg-black text-white">
        <h1
          className="text-4xl font-light"
          style={{ fontFamily: "Atma, serif", fontWeight: 600 }}
        >
          What is Countify?
        </h1>

        <p className="text-xl font-normal mt-2 mb-8 text-center mx-auto max-w-[50%] sm:max-w-[80%]">
          Countify is a user-friendly platform where you can easily count words
          and characters in seconds. Knowing the word count of a text can be
          crucial in many situations. For instance, authors often need to meet
          specific word requirements for articles, essays, reports, stories,
          books, papers, and more. Countify ensures your content meets the
          required length, whether you're aiming to hit a minimum word count or
          stay within a maximum limit. It's the perfect tool to make your
          writing process smoother and more efficient.
        </p>
      </div>
    </div>
  );
};

export default Banner;
