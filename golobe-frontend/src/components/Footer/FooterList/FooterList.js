import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterList = () => {
  return (
    <div className="bg-[#8DD3BB] px-16 flex pb-12 pt-56">
      <div>
        <p className="text-2xl font-bold">Golobe</p>
        <div className="flex gap-4">
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="flex w-full justify-evenly">
        <ul>
          <li className="font-semibold">Our Destinations</li>
          <li>Canada</li>
          <li>Alaksa</li>
          <li>France</li>
          <li>Iceland</li>
        </ul>
        <ul>
          <li className="font-semibold">Our Activities</li>
          <li>Northern Lights</li>
          <li>Cruising & sailing</li>
          <li>Multi-activities</li>
          <li>Kayaking</li>
        </ul>
        <ul>
          <li className="font-semibold">Travel Blogs</li>
          <li>Bali Travel Guide</li>
          <li>Sri Lanks Travel Guide</li>
          <li>Peru Travel Guide</li>
          <li>Bali Travel Guide</li>
        </ul>
        <ul>
          <li className="font-semibold">About Us</li>
          <li>Our Story</li>
          <li>Work with us</li>
        </ul>
        <ul>
          <li className="font-semibold">Contact Us</li>
          <li>Our Story</li>
          <li>Work with us</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
