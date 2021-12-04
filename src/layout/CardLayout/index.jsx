import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardContainer = styled.div`
    width: 100%;
    max-width: 960px;
    height: 100%;
    max-height: 70vh;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: 0 0 15px -10px #000;
    border-radius: 12px;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #444444;
        border-radius: 10rem;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`

const Layout = ({ children }) => {
    return (
        <Container>
            <CardContainer>
                {children}
            </CardContainer>
        </Container>
    )
}

export default Layout