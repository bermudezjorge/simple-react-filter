import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const CardContainer = styled.div`
    width: 100%;
    max-width: 960px;
    height: 100%;
    max-height: 80vh;
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