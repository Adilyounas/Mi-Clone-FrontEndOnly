import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { VscTriangleRight } from "react-icons/vsc";
import "../Style/Footer.css";

const youtubeIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
  >
    <path d="M24.4,11c7.2,0,13,0.6,15.8,1.1c1.5,0.4,2.7,1.4,2.9,2.7c0.6,3.2,1,6.6,1,10.1c-0.1,4.3-0.6,7.8-1,10.3c-0.3,1.9-2.3,2.5-2.9,2.7c-3.6,0.7-9.6,1.2-15.6,1.2s-12.1-0.4-15.6-1.2c-1.5-0.4-2.7-1.4-2.9-2.7C5.3,32.4,5,28.7,5,25c0-4.6,0.4-8,0.8-10.1c0.3-1.9,2.4-2.5,2.9-2.7C12,11.5,18.1,11,24.4,11 M24.4,9c-6.6,0-12.8,0.5-16.1,1.2c-2.2,0.5-4.1,2-4.5,4.3C3.4,16.9,3,20.5,3,25S3.4,33,3.9,35.5c0.4,2.2,2.3,3.8,4.5,4.3c3.5,0.7,9.5,1.2,16.1,1.2c6.6,0,12.6-0.5,16.1-1.2c2.2-0.5,4.1-2,4.5-4.3c0.4-2.5,0.9-6.1,1-10.6c0-4.5-0.5-8.1-1-10.6c-0.4-2.2-2.3-3.8-4.5-4.3C37.1,9.5,31,9,24.4,9L24.4,9z" />
    <path d="M21,20.4l8,4.6l-8,4.6V20.4 M19,17v16l14-8L19,17L19,17z" />
  </svg>
);

const twitterIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
  >
    <path
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M49,11.096c-1.768,0.784-3.664,1.311-5.658,1.552c2.035-1.22,3.597-3.151,4.332-5.448c-1.903,1.127-4.013,1.947-6.255,2.388c-1.795-1.916-4.354-3.11-7.186-3.11c-5.44,0-9.849,4.409-9.849,9.847c0,0.771,0.088,1.522,0.257,2.244c-8.184-0.412-15.441-4.332-20.299-10.29c-0.848,1.458-1.332,3.149-1.332,4.953c0,3.416,1.735,6.429,4.38,8.197c-1.616-0.051-3.132-0.495-4.46-1.233c0,0.042,0,0.082,0,0.125c0,4.773,3.394,8.748,7.896,9.657c-0.824,0.227-1.694,0.346-2.592,0.346c-0.636,0-1.253-0.062-1.856-0.178c1.257,3.909,4.892,6.761,9.201,6.84c-3.368,2.641-7.614,4.213-12.23,4.213c-0.797,0-1.579-0.044-2.348-0.137c4.356,2.795,9.534,4.425,15.095,4.425c18.114,0,28.022-15.007,28.022-28.016c0-0.429-0.011-0.856-0.029-1.275C46.012,14.807,47.681,13.071,49,11.096z"
    />
  </svg>
);

const faceBookIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
  >
    <path
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M25,4C13.402,4,4,13.402,4,25c0,10.528,7.756,19.222,17.861,20.74V30.566h-5.196v-5.52h5.196v-3.673c0-6.081,2.963-8.751,8.017-8.751c2.421,0,3.701,0.179,4.307,0.261v4.818h-3.447c-2.145,0-2.895,2.034-2.895,4.327v3.017h6.289l-0.853,5.52h-5.435v15.22C38.093,44.395,46,35.631,46,25C46,13.402,36.598,4,25,4z"
    />
  </svg>
);

const instagramIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
  >
    <path
      fill="none"
      stroke="#000000"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z"
    />
    <path
      fill="none"
      stroke="#000000"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M25 15A10 10 0 1 0 25 35A10 10 0 1 0 25 15Z"
    />
    <path d="M37 11A2 2 0 1 0 37 15A2 2 0 1 0 37 11Z" />
  </svg>
);

const Footer = ({ footer }) => {
  return (
    <>
      <div className="preFooter">
        <div>
          {<BsArrowRepeat />}{" "}
          <p>
            {" "}
            <b>Hassle-free replacement</b> <br /> 10-day easy replacement policy
            on mi.com{" "}
          </p>
        </div>

        <div>
          {<BiCheckShield />}{" "}
          <p>
            {" "}
            <b>100% secure payments</b> <br /> We support Cards, wallets, EMI
            and COD{" "}
          </p>
        </div>

        <div>
          {<BsMap />}{" "}
          <p>
            {" "}
            <b>Vast service network</b> <br /> 1000 Mi service-centers across
            600 cities
          </p>
        </div>
      </div>

      <div className="preFooter2">
        <div>
          {" "}
          <p>LET'S STAY IN TOUCH</p>{" "}
          <span>Get updates on sales specials and more</span>{" "}
        </div>

        <div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <button>
              {" "}
              <VscTriangleRight />{" "}
            </button>
          </div>

          <span>Thanks. You're on our email list for special offers.</span>
        </div>

        <div>
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
        </div>

        <div>
          {faceBookIcon}
          {youtubeIcon}
          {instagramIcon}
          {twitterIcon}
        </div>
      </div>

      <div className="footer">
        <div>
          <p>SUPPORT</p>
          {footer.support.map((item) => {
            return (
              <a key={item.url} href={item.url}>
                {" "}
                {item.name}
              </a>
            );
          })}
        </div>

        <div>
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item) => {
            return (
              <a key={item.url} href={item.url}>
                {" "}
                {item.name}
              </a>
            );
          })}
        </div>

        <div>
          <p>RETAIL STORE</p>
          {footer.retailStore.map((item) => {
            return (
              <a key={item.url} href={item.url}>
                {" "}
                {item.name}
              </a>
            );
          })}
        </div>

        <div>
          <p>ABOUT</p>
          {footer.aboutUS.map((item) => {
            return (
              <a key={item.url} href={item.url}>
                {" "}
                {item.name}
              </a>
            );
          })}
        </div>

        <div>
          <p>CONTACT US</p>
          {footer.contactUs.map((item) => {
            return (
              <a key={item.url} href={item.url}>
                {" "}
                {item.name}
              </a>
            );
          })}
        </div>

        <div>
          <div>Chat with our Virtual AI bot (24/7 Live Agent Support) </div>
          <button>CHAT NOW</button>
        </div>
      </div>

      <div className="footerBorder">
        <div>Copyright @ 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
