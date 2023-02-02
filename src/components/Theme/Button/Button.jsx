import { Button, Out } from './Button.styled';

export const ClearButton = ({ reset }) => {
  return (
    <Button onClick={() => reset()} type="button">
      Clear
    </Button>
  );
};

export const SubmitButton = ({ children, type, buttonLog }) => {
  return (
    <Button type={type} buttonLog={buttonLog} color={'submit'}>
      {children}
    </Button>
  );
};

// Кнопки для модалки
export const LogOutButton = ({ children, dispatch, closeModal }) => {
  const handleClick = () => {
    if (children === 'Yes') {
      dispatch();
      closeModal();
    }
  };

  return <Out onClick={handleClick}>{children}</Out>;
};

export const DismissButton = ({ children, closeModal }) => {
  return <Button onClick={closeModal}>{children}</Button>;
};
