import React from 'react';

const FormHeader = ({ formType, goHome }) => {

  const formTitle = (formType === "signup") ? "Sign Up" : "Login";

  return(
    <header className="login-signup-header group">
      <h1>{formTitle}</h1>
      <span className="login-signup-cancel" onClick={goHome}/>
    </header>
  );
};

export default FormHeader;
