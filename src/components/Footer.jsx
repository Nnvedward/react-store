import { faCircle, faEnvelope, faLocationDot, faPhone, faSquare, faTriangleCircleSquare, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    margin-right: 20px;
`
 
const Center = styled.div`
    flex:1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;
    height: 40px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>PRIME.</Logo>
                <Description>
                    There are many variations of Lorem Ipsum available, but the majority have suffered alternation in some fprm, by injection humor, or randomised words which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <FontAwesomeIcon icon={faTriangleCircleSquare} />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <FontAwesomeIcon icon={faCircle} />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <FontAwesomeIcon icon={faSquare} />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <FontAwesomeIcon icon={faX} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><FontAwesomeIcon style={{marginRight: "10px"}} icon={faLocationDot}/> Enugu, Nigeria</ContactItem>
                <ContactItem><FontAwesomeIcon style={{marginRight: "10px"}} icon={faPhone}/> +234 816 457 8471</ContactItem>
                <ContactItem><FontAwesomeIcon style={{marginRight: "10px"}} icon={faEnvelope}/> nnvedward@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/9VKBnLL/IMG-0117.jpg"/>
            </Right>
        </Container>
    )
}

export default Footer