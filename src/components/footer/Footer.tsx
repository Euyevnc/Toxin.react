import * as React from 'react';
import { connect } from 'react-redux'

import logoIcon from "../../assets/images/logo-icon-color.svg";
import logoText from "../../assets/images/logo-text.svg"
import Textfield from '../Textfield/Textfield';
import "./footer.scss"

const Footer: React.FunctionComponent<FooterProps> = (props) => {

  const { blocks, textUnderLogo, subscribeOfferHeader, subscribeOfferText, lang } = props

  return (
    <footer className = "footer">
      <div className = "footer__content">
        <section className = "footer__block footer__block_width_wide">
          <div className = "footer__sign">
            <span className = "footer__logo">              
              <img src={logoIcon} alt="logo-icon" className = "header__logo" />
            </span>
            <span className = "footer__brand">
              <img src={logoText} alt="logo-icon" className = "header__brand" />
            </span>
          </div>
          <p className = "footer__text">
            {textUnderLogo[lang]}
          </p>
        </section>
        {
          blocks.map( (block, blockIndex) => {
            return (
              <section className = "footer__block footer__block_width_slim" key = {blockIndex}> 
                <h3 className = "footer__heading">{block.header[lang]}</h3>
                <ul className="footer__list">
                  { 
                    block.hrefs.map( (href, hrefIndex) => {
                      return(
                        <li className = "footer__list-element" key = {hrefIndex}>
                          <a className ="footer__link" href = {href.link} key = {hrefIndex}>{href.name[lang]}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </section> 
            )
          })
        }
        <section className = "footer__block footer__block_width_wide">
          <h3 className = "footer__heading">{subscribeOfferHeader[lang]}</h3>
          <p className = "footer__text">{subscribeOfferText[lang]}</p>
          <Textfield placeholder = { {ru: 'Email', en: 'Email'} } arrow = {true}/>
        </section>
      </div>
    </footer>
  );
}

const mapStateToProps = (state: State, ownProps: FooterOwnProps) => ({
  lang: state.language,
  ...ownProps
})


export default connect(mapStateToProps)(Footer);