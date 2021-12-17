import {Component} from 'react'

import {
  Inputis,
  Heading,
  Labels,
  Generatebtn,
  Optionis,
  Selectis,
  FormContainer,
  Appcontainer,
  MemeGenataorContainer,
  FormandMemeContainer,
  MemeContainer,
  TextContentis,
  ButtonCont,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    fontSizeis: fontSizesOptionsList[0].optionId,
    backGrounImgurl: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: '',
    backGroundurlInput: '',
  }

  resetAlldata = () => {
    this.setState({
      topText: '',
      bottomText: '',
      fontSizeis: fontSizesOptionsList[0].optionId,
      backGrounImgurl: '',
    })
  }

  onchangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onchangeImageUrl = event => {
    this.setState({backGrounImgurl: event.target.value})
  }

  onchangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onchangeSizeis = event => {
    this.setState({fontSizeis: event.target.value})
  }

  onsubmitform = event => {
    event.preventDefault()
    console.log('saibababus')
    const {topText, bottomText, fontSizeis, backGrounImgurl} = this.state
    this.setState({
      topTextInput: topText,
      bottomTextInput: bottomText,
      fontSizeInput: fontSizeis,
      backGroundurlInput: backGrounImgurl,
    })
  }

  renderMemeContainer = () => {
    const {
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      backGroundurlInput,
    } = this.state
    return (
      <MemeContainer data-testid="meme" forImageUrl={backGroundurlInput}>
        <TextContentis forTextsizeis={fontSizeInput}>
          {topTextInput}
        </TextContentis>
        <TextContentis forTextsizeis={fontSizeInput}>
          {bottomTextInput}
        </TextContentis>
      </MemeContainer>
    )
  }

  renderFormContainer = () => {
    const {topText, bottomText, fontSizeis, backGrounImgurl} = this.state

    return (
      <FormContainer onSubmit={this.onsubmitform}>
        <Labels htmlFor="imageurl">Image URL</Labels>
        <Inputis
          type="text"
          id="imageurl"
          placeholder="Enter The Image URL"
          value={backGrounImgurl}
          onChange={this.onchangeImageUrl}
        />
        <Labels htmlFor="toptext">Top Text</Labels>
        <Inputis
          type="text"
          id="toptext"
          placeholder="Enter The Top Text"
          value={topText}
          onChange={this.onchangeTopText}
        />
        <Labels htmlFor="bottomtext">Bottom Text</Labels>
        <Inputis
          type="text"
          id="bottomtext"
          placeholder="Enter The Bottom Text"
          value={bottomText}
          onChange={this.onchangeBottomText}
        />
        <Labels htmlFor="fontsixe">Font Size</Labels>
        <Selectis
          id="fontsixe"
          value={fontSizeis}
          onChange={this.onchangeSizeis}
        >
          {fontSizesOptionsList.map(eachone => (
            <Optionis value={eachone.optionId} key={eachone.optionId}>
              {eachone.displayText}
            </Optionis>
          ))}
        </Selectis>
        <ButtonCont>
          <Generatebtn type="submit">Generate</Generatebtn>
          <Generatebtn type="button" onClick={this.resetAlldata}>
            Reset
          </Generatebtn>
        </ButtonCont>
      </FormContainer>
    )
  }

  render() {
    return (
      <Appcontainer>
        <MemeGenataorContainer>
          <Heading>Meme Generator</Heading>
          <FormandMemeContainer>
            {this.renderMemeContainer()}
            {this.renderFormContainer()}
          </FormandMemeContainer>
        </MemeGenataorContainer>
      </Appcontainer>
    )
  }
}

export default MemeGenerator
