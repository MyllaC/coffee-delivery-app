import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple']};
    padding: 0.5rem;
    border-radius: 6px;

    span {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
    transition-duration: 0.1s;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
    }

    span {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme['white']};

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
