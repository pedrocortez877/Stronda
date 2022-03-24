import { Container } from "./styles";

export function Input(properties) {
  return (
    <>
      {properties.isPassword ? (
        <Container
          type="password"
          Width={properties.width}
          placeholder={properties.placeholder}
        />
      ) : (
        <Container
          Width={properties.width}
          placeholder={properties.placeholder}
        />
      )}
    </>
  );
}
