import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const reset = () => setValue("");
  const bind = {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }
  };

  return [value, bind, setValue, reset];
};

export default useInput;
