import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {onImageclick: true}

  feedBackElement = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <>
        <img src={loveEmojiUrl} alt="love emoji" className="lovecss" />
        <h1 className="thankYoucss">Thank You!</h1>
        <p className="feedBackText">
          We will use your feedback to improve our customer support performance.
        </p>
      </>
    )
  }

  selectionElement = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(item => (
            <li>
              <button
                type="button"
                className="buttons"
                onClick={this.onImageCLicking}
              >
                <img className="imgcss" src={item.imageUrl} alt={item.name} />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  onImageCLicking = () => {
    const {onImageclick} = this.state

    if (onImageclick) {
      this.setState({
        onImageclick: false,
      })
    } else {
      this.setState({
        onImageclick: true,
      })
    }
  }

  render() {
    const {onImageclick} = this.state
    return (
      <div className="totalBG">
        <div className="ContentContainer">
          {onImageclick ? this.selectionElement() : this.feedBackElement()}
        </div>
      </div>
    )
  }
}
export default Feedback
