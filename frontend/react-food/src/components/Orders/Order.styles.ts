import styled from "styled-components";

export const OrderComponent = styled.div`
    width: 180px;
    height: 255px;
    cursor: pointer;

    div {
        background: url("/img.png") center;
        background-size: cover;
        height: 180px;
        width: 180px;
        border-radius: 10px;
        padding: 10px;
    }


    span {
        display: grid;
        grid-template-columns: 1fr 1fr;


        p.order-title {
            grid-column: span 2;
        }

        strong {
            font-size: 18px;
        }

        p.order-price {
            color: var(--quinary-color);
            text-decoration: line-through;
        }

        p.restaurant-title {
            grid-column: span 2;
            color: var(--quinary-color);
        }
    }


`

export const OrderContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr auto;
    
    width: 100%;
    align-items: center;
    justify-content: center;
    
    section {
        /* column-gap: 50px; */
        grid-column: span 2;
    }

    div.selection-order {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
        max-width: 1350px;
    }
`