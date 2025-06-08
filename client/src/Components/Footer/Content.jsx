import React from "react";
import { Link } from "react-router-dom";
import footerData from "./footerData";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Content = () => {
  return (
    <footer className="p-10 bg-[var(--sage)] ">
      <div className="flex justify-around items-start flex-wrap gap-10">
        <div>
          <img
            className="logo max-w-[120px] h-auto size-30s"
            src="/logo-nobg.png "
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-2 text-[var(--darkbrown)]">
          <h4 className="text-lg font-bold">Contact</h4>
          <p>
            <strong>Address:</strong> Lalitpur, Nepal
          </p>
          <p>
            <strong>Phone:</strong> +977 9846669386
          </p>
          <p>
            <strong>Hours:</strong> 9:00 - 23:00, Sun - Sat
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-[var(--darkbrown)]">
            Connect with us
          </h4>
          <div className="icon flex mt-2 gap-4">
            <a
              href="https://www.instagram.com/thrift.and._.thrive?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="hover:text-forestgreen transition-colors duration-200 text-darkbrown"
              />
            </a>

            <a
              href="https://www.tiktok.com/@your_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok
                size={30}
                className="hover:text-forestgreen transition-colors duration-200 text-darkbrown"
              />
            </a>

            <FaFacebookSquare
              size={30}
              className="hover:text-forestgreen transition-colors duration-200 text-darkbrown"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-[var(--darkbrown)]">About</h4>
          <div className="flex gap-2 flex-col">
            {footerData.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-forestgreen transition-colors duration-200 text-darkbrown"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-5 text-green-200" />
      <div className="copyright text-center text-[var(--darkbrown)]">
        <p>© 2024, Thrift and Thrive - T&T</p>
      </div>
    </footer>
  );
};

export default Content;
