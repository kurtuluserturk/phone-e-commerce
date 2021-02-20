import styled from 'styled-components'

/* We export it to use it in another component */
export const ButtonContainer = styled.button`   
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.1rem solid var(--darkGreen);   ${'' /* I got this variable from App.css */}
    border-color:${props => props.cart ? "var(--lightBlue)" : "var(--darkGreen)"};    ${'' /* We don't have to use "props" keyword for here. */}
    border-radius:0.5rem;
    color:${prop => (prop.cart ? "var(--lightBlue)" : "var(--lightGreen)")}  ;  
    padding:0.2rem 0.5rem;
    margin:0.2rem 0.5rem 0.2rem 0;
    cursor:pointer;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:${prop => prop.cart ? "var(--mainBlue)" : "var(--darkGreen)"};
        color:${prop => (prop.cart ? "var(--mainWhite)" : "var(--lightYellow)")};
    }
    &:focus{
        outline:none;
    }
`