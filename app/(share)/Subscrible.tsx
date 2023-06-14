import React from "react";

const Subscrible = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">Subscrible to our newsletter</h4>
      <p className="text-wh-500 my-3 mx-auto w-5/6">
        Enter email address for newsletter
      </p>
      <input
        type="text"
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter email address for newsletter"
      />
      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 uppercase min-w-[100px] py-2 px-5 mt-3">
        Subscrible
      </button>
    </div>
  );
};

export default Subscrible;
