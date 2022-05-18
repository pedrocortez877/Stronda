import { Container } from "./styles";

export function Input({ isPassword, width, placeholder, onChange, value }) {
  return (
    <>
      {isPassword ? (
        <Container
          type="password"
          Width={width}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      ) : (
        <Container
          Width={width}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
    </>
  );
}
