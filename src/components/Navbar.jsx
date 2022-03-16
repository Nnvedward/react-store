import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    margin-bottom: 15px;
    ${mobile({ height: "40px" })}
`
const Wrapper = styled.div`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

`
// Left navbar starts
const Left = styled.div`
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;    
    ${mobile({ fontSize: "24px", paddingLeft: "20px" })}
`


// Right navbar starts
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2", justifyContent: "center" })}

`
const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
    position: relative;
    ${mobile({ fontSize: "14px", marginLeft: "25px" })}

`
const CartIcon = styled.span`
    width: 20px;
    height: 20px;
    position: absolute;
    top: -16px;
    right: -12px;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>PRIME.</Logo>
                </Left>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                       <FontAwesomeIcon icon={faCartShopping} />
                       <CartIcon>2</CartIcon>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar