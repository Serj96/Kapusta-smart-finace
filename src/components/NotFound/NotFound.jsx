import { ParentContainer, ContainerNotFound, Img, NotFoundLink } from "./NotFound.styled"
import kotik from "images/NotFound.jpg"
export const NotFound = () => {

    return <ParentContainer><ContainerNotFound><h2>Page Not Found</h2>
        <Img src={kotik} alt="sad cat" />
        <NotFoundLink to={'/home/expenses'}><h1>To Home</h1></NotFoundLink>
    </ContainerNotFound></ParentContainer>
}