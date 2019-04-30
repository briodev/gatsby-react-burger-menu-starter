import React from "react"
import styled from "@emotion/styled"
import Sidemenu from "../core/sidemenu"

const Container = styled.div`
    height: 100vh;
`
const Main = styled.div`
    margin-top: 1rem;
    padding: 5rem;
`

export default ({ children }) => (
  <Container>
    <Sidemenu></Sidemenu>
    <Main>
        {children}
    </Main>
  </Container>
 
)