import styled from 'styled-components';

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
`;

export const ContainerRepository = styled.div`
  width: 250px;
  background: #FFF;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    img {
      width: 80px;
    }

    strong {
      font-size: 24px;
      margin-top: 15px;
    }

    small {
      font-size: 14px;
      color: #666 ;
    }
  }
  ul {
    list-style: none;

    li {
      font-weight: 400;
      padding: 10px 30px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n-1){
        background: #e7e6e6;
      }
    }
  }
`;
