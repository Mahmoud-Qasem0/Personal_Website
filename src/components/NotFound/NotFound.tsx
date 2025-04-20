import React, { JSX } from "react";
import notfound from "../../assets/notfound/notfound.jpg";

const NotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="notFound vh-100 d-flex justify-content-center align-items-center">
        <img src={notfound} alt="not found" />
      </div>
    </>
  );
};

export default NotFound;
