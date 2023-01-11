import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  // color: #000;
  // background: green;
`;

export const Form = styled.form`
  // background: green;
  padding-left: 5px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .input-fields {
    background: #0892a5;
    border: solid 2px #000;
    padding-left: 10px;
    padding-top: 5px;
    color: aquamarine;
    // opacity: 0.8;
    font-size: 18px;
    &:hover {
      opacity: 0.7;
      color: aquamarine;
      transition: 1s;
      background: #0892a5;
    }
  }
  .btn {
    background: aquamarine;
    color: #000;
    width: 30%;
    padding: 0px 5px;
    margin-top: 25px;
    border: solid 2px #000;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background: #0892a5;
      color: aquamarine;
      transition: 1s;
    }
    @media only screen and (max-width: 820px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 599px) {
      width: 130px;
    }
  }
`;
export const Label = styled.label`
  padding: 25px 0 5px 1px;
  font-size: 20px;
`;
export const Input = styled.input`
  height: 50px;
  border-radius: 5px;
  width: 500px;

  @media only screen and (max-width: 820px) {
    width: 400px;
  }
  @media only screen and (max-width: 531px) {
    width: 330px;
  }
`;
export const Textarea = styled.textarea`
  height: 170px;
  border-radius: 5px;
  margin: 40px 0;
`;
