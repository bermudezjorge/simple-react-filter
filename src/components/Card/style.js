import styled from 'styled-components'

export const CardContainer = styled.li`
    width: 100%;
    height: 11.5rem;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    padding: 0 2rem;
`

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border: 1px solid #e3e3e3;
    border-radius: 10rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
`

export const InfoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    margin-left: 1.3rem;
    list-style: none;
`

export const Name = styled.h1`
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 700;
`

export const Info = styled.li`
    margin-top: 0.3rem;
    font-weight: 400;
    color: #a3a3a3;
`