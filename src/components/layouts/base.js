import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  padding: 3rem;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

`
const underline = css`
  color: white;
  background-color: black;
  padding: .25em;
`

export default ({ children }) => (
  <Container>
    <h1 css={underline}>WEBSITE DESIGN?</h1>
    {children}
  </Container>
 
)