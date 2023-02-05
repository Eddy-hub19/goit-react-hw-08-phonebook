import styled from 'styled-components';

// App
export const Container = styled.div`
  border: 2px solid black;
  background: gainsboro;
  height: 100%;
  max-width: 100%;
  border-radius: 10px;
  min-height: 100vh;
`;

export const Header = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 60px;
  background: rgb(95, 158, 161);
  box-shadow: 1px 2px 3px 1px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  h1 {
    margin-top: 0px;
    padding-top: 10px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  max-height: 80%;
  padding: 15px 40px;
  border: 1px solid black;
  margin: 50px auto;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const SubTitle = styled.h2`
  text-align: center;
`;

export const Message = styled.div`
  font-size: 26px;
`;

// ContactForm

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
`;

export const Submit = styled.button`
  color: aliceblue;
  padding: 6px;
  cursor: pointer;
  background: cadetblue;
  :hover {
    color: white;
    background: #009688;
    box-shadow: 0px 0px 19px 1px grey;
    transition: box-shadow 1s ease;
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 13px;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  margin-left: 20px;
  :hover {
    box-shadow: 0px 0px 19px 1px grey;
    transition: box-shadow 1s ease;
  }
`;

//Filter

export const WrapFilter = styled.div`
  text-align: center;
`;

export const link = styled.a`
  color: red;
`;
