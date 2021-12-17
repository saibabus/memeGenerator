// Style your components here
import styled from 'styled-components'

export const Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
`
export const MemeGenataorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const FormandMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${props => props.forImageUrl});
  background-size: cover;
  height: 300px;
  width: 95%;
  margin: 10px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  align-self: center;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

export const TextContentis = styled.p`
  color: #ffffff;
  font-size: ${props => props.forTextsizeis}px;
  font-family: 'Roboto';
  text-align: center;
`
export const Labels = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 16px;
`
export const Inputis = styled.input`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  outline: none;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
`
export const Selectis = styled.select`
  color: #7e858e;
  font-family: 'Roboto';
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
`
export const Optionis = styled.option`
  font-family: 'Roboto';
  font-size: 16px;
  padding: 5px;
`

export const Generatebtn = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
`
export const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
