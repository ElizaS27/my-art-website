import {Container, Name, ImageContainer, Image, Info} from './Card.style'
import { useNavigate } from "react-router-dom";

const Card = ({user, hover}) => {
    let navigate = useNavigate();
    const openUserPage = () => {
        navigate(`/exercises/users/${user.id}`, {state: user});
    }

    return (
        <Container onClick={() => openUserPage({user})} hover={hover}>
            <ImageContainer>
                <Image image={user.avatar}/>
            </ImageContainer>
            <Name> {`${user.first_name} ${user.last_name}`} </Name>
            <Info>{user.employment.title}</Info>
        </Container>
    )
}

export default Card;