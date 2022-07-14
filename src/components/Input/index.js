import { Container } from "./styles";

import masks from "../../constants/masks";
import { useEffect, useState} from "react";

export function Input({ isPassword, width, placeholder, onChange, value, maskIndex, disabled, onBlur }) {
  const [mask, setMask] = useState("");
  useEffect(() => {
    if(maskIndex !== "none"){
      const maskInformed = masks.find(item => item.index === maskIndex);
      setMask(maskInformed.mask);
    }
  }, []);
  return (
    <>
      {isPassword ? (
        <Container
          type="password"
          width={width}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      ) : (
          <Container
            width={width}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            mask={mask}
            disabled={disabled}
            onBlur={onBlur}
          />
        )
      }
    </>
  );
}
