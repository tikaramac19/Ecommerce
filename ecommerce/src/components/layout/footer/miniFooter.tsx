import React from "react";
import styled from "styled-components";
const MiniFooter = () => {
    return <>
        <MiniFooterWrapper>
            <LeftWrapper>
                &copy; CopyRight 2033 - All right reserved by Daraz.
            </LeftWrapper>
            <RightWrapper>
                Powered by - codniv
            </RightWrapper>
        </MiniFooterWrapper>
    </>
}

export default MiniFooter;

const MiniFooterWrapper = styled.div`
        height: 42px;
        width: 100%;
        background: #dedede;
        display:flex;
        padding: 0rem 4rem;
        align-items:center;
        justify-content: space-between;
`
const LeftWrapper = styled.div`
        font-size : 0.9rem; 
        color: #333;
`
const RightWrapper = styled.div`
        font-size: 0.9rem;
        color:#333;
`