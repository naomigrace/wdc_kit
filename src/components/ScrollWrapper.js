import React from 'react'
import { UpButton, ScrollToTopIconContainer, ScrollWrapperContainer } from "../index"

class ScrollWrapper extends React.Component {
  state = { hasScrolled: false }

  componentDidMount() {
    this.scrollingWrapper.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if (this.scrollingWrapper.scrollTop > 100 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true })
    } else if (this.scrollingWrapper.scrollTop < 100 && this.state.hasScrolled) {
      this.setState({ hasScrolled: false })
    }
  }

  scrollToTop = () => {
    this.scrollingWrapper.scrollTop = 0
  }

  reference = id => ref => {
    this[id] = ref
  }

  render() {
    return (
      <div {...this.props}>
        <ScrollWrapperContainer ref={this.reference('scrollingWrapper')}>
          {this.props.children}
        </ScrollWrapperContainer>
        {this.state.hasScrolled && (
          <ScrollToTopIconContainer onClick={this.scrollToTop}>
            <UpButton name="backToTop" small color={`tertiary_mid_wod`} shadow={`md`} />
          </ScrollToTopIconContainer>
        )}
      </div>
    )
  }
}

export default ScrollWrapper


