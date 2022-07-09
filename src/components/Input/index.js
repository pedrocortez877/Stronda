import { Container, ContainerMoney } from "./styles";

import masks from "../../constants/masks";
import { useEffect, useState} from "react";

export function Input({ isPassword, isMoney, width, placeholder, onChange, value, maskIndex }) {
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
        isMoney ?
        (
          <ContainerMoney
            width={width}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            prefix={"R$"}
          />
        )
        :
        (
          <Container
            width={width}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            mask={mask}
          />
        )
      )}
    </>
  );
}
