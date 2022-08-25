import React from "react";

const Input = ({ name, onChange, value, label, error, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
