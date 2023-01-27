import { Button } from "./Button.styled"
export const ClearButton = () => {
    return <Button type="button">Clear</Button>
}

export const SubmitButton = ({ children, type, buttonLog }) => {
    return (
      <Button type={type} buttonLog={buttonLog}>
        {children}
      </Button>
    );
}