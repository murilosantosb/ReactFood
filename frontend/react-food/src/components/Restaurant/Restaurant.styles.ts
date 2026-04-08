import styled from "styled-components";

export const RestaurantContainer = styled.section`
    margin-top: 10%;
    position: relative;
    width: 380px;

    span.icons_rastaurant {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 1%;
        padding: 5px;
        
        width: 370px;
    }

    span.description_content_restaurant {
        display: grid;
        grid-template-columns: 1fr 70px;
        width: 210px;
    }

    strong {
        grid-column-start: span 2;
    }

    img {
        border-radius: 15px;
    }
`