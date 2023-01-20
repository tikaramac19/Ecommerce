import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout/hoc/layout";
const ErrorPageComp = () => {
    return (<>
        <ErrorWrapper>
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" alt="img" height="400px" width={"100%"} />
        </ErrorWrapper>

    </>)
}

export const ErrorPage = Layout(ErrorPageComp);

const ErrorWrapper = styled.div`
        display:flex;
        justify-content:center;
        width:100%;

        @media (max-width: 500px) {
        width: 100vw;
  }
`