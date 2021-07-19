import styled from 'styled-components';

const DescritionGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
  padding: 6px;
  //margin: 8px;
  color: #5A5A5A;
  background-color: #D9E6F6;
  text-align: center;
  font-size: 14px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width:860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 1fr;
    grid-template-rows: 18px;
  }
`;

export default DescritionGrid;
