import { Fragment, memo } from "react";
import logo from "../../src/asset/logo.png";
import "./App.css";
import Button from "../components/Button";
// import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  const buttonText = [
    { text: "Home", active: false },
    { text: "Company", active: false },
    { text: "Services", active: false },
    { text: "Contacts", active: true },
  ];
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          maxWidth: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "100",
          background: "white",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div>
          {/* <Link to={'/'}> */}
          <img src={logo} alt="logo" />
          {/* </Link> */}
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "50%" }}
        >
          {buttonText.map((button) => (
            <Button
              className={button.active ? "btn-header-active" : "btn-header"}
              key={button}
              text={button.text}
              textColor="text-black"
            />
          ))}
        </div>
        <div style={{ width: "10%" }} />
      </div>
    </Fragment>
  );
};

export default memo(Header);
