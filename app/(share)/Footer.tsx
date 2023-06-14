import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold ">Blog of the dantr</h4>
          <p className="my-5 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            minus soluta similique rerum optio molestias porro tempora possimus!
            Magni laudantium aut libero cumque maxime velit omnis aspernatur
            expedita perferendis nisi!
          </p>
          <p>Blog dantr allright reverse</p>
        </div>
        {/* Secondf  column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold ">Link</h4>
          <p className="my-5 ">masa ijdw yo ys</p>
          <p className="my-5 ">some random link</p>
          <p>Blog dantr allright reverse</p>
        </div>
        {/* 3rd  column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold ">Contact</h4>
          <p className="my-5 ">masa ijdw yo ys</p>
          
          <p>989832 0892</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
