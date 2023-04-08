import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  modes = () => {
    const {mode} = this.state
    if (mode) {
      this.setState({mode: false})
    } else {
      this.setState({mode: true})
    }
  }

  render() {
    const {mode} = this.state
    console.log(mode)
    let containerClassName
    let headingClassName
    let buttonClassName
    let text
    if (mode) {
      containerClassName = 'dbg-container'
      headingClassName = 'dheading'
      buttonClassName = 'dbutton'
      text = 'Light Mode'
    } else {
      containerClassName = 'lbg-container'
      headingClassName = 'lheading'
      buttonClassName = 'lbutton'
      text = 'Dark Mode'
    }
    return (
      <div className={containerClassName}>
        <h1 className={headingClassName}>Click To Change Mode</h1>
        <button type="button" className={buttonClassName} onClick={this.modes}>
          {text}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
