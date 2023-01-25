
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-item: center;
  gap: 10px;
`;

export const Card = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid green;
  box-shadow: 2px 3px 5px 3px grey;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-family: 'Source Sans Pro';
  margin-bottom: 10px;
`;