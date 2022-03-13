import { Container } from './styles';

export function Input(properties) {
  return(
    <>
      {properties.isPassword ? 
        (
          <Container type="password" width={properties.width} placeholder={properties.placeholder}/>
        )
        :
        (
          <Container width={properties.width} placeholder={properties.placeholder}/>
        )
      }
    </>
  );
}