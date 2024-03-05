import styled from "styled-components";


export const StyledCard = styled.div`
    width: 20rem;
    height: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
    background: var(--white);
    padding-top: 1rem;
    border-radius: 12px;

    img {
      width:  18rem;
      height: 18rem;
      border-radius: 12px;
    }

    h3 {
      color: var(--dark-blue);
      font-weight: 700;
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
      color: var(--grayish-blue);
      font-weight: 400;
    }
`