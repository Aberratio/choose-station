import styled from "styled-components";

export const SiteContainer = styled.div`
  background-color: white;
`;

export const ProfileContainer = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 50px;

  @media screen and (max-width: 600px) {
    margin-top: 10px;
    padding: 10px;
  }

  .MuiGrid-item {
    &:nth-child(5) {
      ${(props) => props.isExcludingDisabled && "display: none"};
    }
  }
`;
