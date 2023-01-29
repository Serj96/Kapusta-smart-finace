import { Button } from './Button.styled';
export const ClearButton = ({ reset }) => {
  return (
    <Button onClick={() => reset()} type="button">
      Clear
    </Button>
  );
};

export const SubmitButton = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};
