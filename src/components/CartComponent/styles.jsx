import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin: 2rem 0;
  > .mySwiperCategories * {
    /* background-color: white; */
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  > h3 {
    text-align: center;
  }
`;

export const ProductsContainer = styled.ul`
  ${() => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`;
export const ProductItem = styled.li`
  ${() => css`
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }
  `}
`;
