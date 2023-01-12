import styled from "styled-components";

export const StyledModalFavoritesContent = styled.div`
width: 90%;
max-width: 500px;

.cartTitle{
    background: var(--color-background);
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    h2 {
        color: var(--color-font);
    }
    .closeIcon {
        color: var(--color-font);
        cursor: pointer;
    }
}
`