import styled from "styled-components";

export const StyledEmptyList = styled.div`
    width: 100%;
    height: 150px;
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 10px;
    h3{
    text-align: center;
    color: var(--gray-600);
}
p{
    color: var(--grey-300);
}
`