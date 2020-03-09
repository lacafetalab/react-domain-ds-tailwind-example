import React from "react";

interface IProps {
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
}

const TextField: React.FC<IProps> = ({
  label,
  type = "text",
  placeholder = "",
  error,
  ...rest
}) => {
  return (
    <label className="block">
      {label && (
        <span className="block text-neutral-03 text-sm font-bold mb-md">
          {label}
        </span>
      )}

      <input
        className={[
          "shadow appearance-none border border-neutral-01 rounded-sm w-full py-md px-lg text-neutral-03 leading-tight focus:outline-none focus:shadow-outline",
          error ? "border-error mb-sm" : "border-neutral-01"
        ].join(" ")}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="text-error text-small-02 italic">{error}</p>}
    </label>
  );
};

export default TextField;
