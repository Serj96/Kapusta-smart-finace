import { Button } from "./Button.styled"
export const ClearButton = () => {
    return <Button type="button">Clear</Button>
}

export const SubmitButton = ({ children, type }) => {
    return <Button type={type}>{children}</Button>
}