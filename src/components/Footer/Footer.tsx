import React from "react";

export const PRODUCTS = [
  { name: "Drag And Drop", link: "#" },
  { name: "Visual Studio X", link: "#" },
  { name: "Easy Content", link: "#" },
];
export const RESOURCES = [
  { name: "Industries and tools", link: "#" },
  { name: "Use cases", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Online evenet", link: "#" },
  { name: "Nostrud exercitation", link: "#" },
];
export const COMPANY = [
  { name: "Diversity & inclusion", link: "#" },
  { name: "About us", link: "#" },
  { name: "Press", link: "#" },
  { name: "Customer Stories", link: "#" },
  { name: "Online communities", link: "#" },
];
export const SUPPORT = [
  { name: "Documentation", link: "#" },
  { name: "Tutorials & guides", link: "#" },
  { name: "Webinars", link: "#" },
  { name: "Open-source", link: "#" },
];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-github", link: "#" },
  { name: "logo-linkedin", link: "#" },
  { name: "logo-instagram", link: "#" },
];

const Item = ({ Links, title }: any) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link: any) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

const SocialIcons = ({ Icons }: any) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon: any) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <div> {icon.name} </div>
        </span>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
