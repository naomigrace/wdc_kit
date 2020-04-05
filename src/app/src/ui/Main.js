import styled from "styled-components"

export default styled.main`
    display: flex;
    flex-direction: column;

    @media (min-width: 1025px) {
        flex-direction: row;
    }
`