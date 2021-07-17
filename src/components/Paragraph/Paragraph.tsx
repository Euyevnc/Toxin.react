import * as React from 'react';
import { connect } from 'react-redux'

import "./paragraph.scss"

const Paragraph: React.FunctionComponent<ParagraphProps> = (props) => {
  const { lang, styles = {}, text} = props
  return <p className = "paragraph" style = { styles }> { text[lang] } </p>
  
}

const mapStateToProps = (state: State, ownProps: ParagraphOwnProps) => ({
  lang: state.language,
  ...ownProps
})

export default connect(mapStateToProps)(Paragraph)

