declare type FooterProps = {
  textUnderLogo: LocalTexts;
  subscribeOfferHeader: LocalTexts;
  subscribeOfferText: LocalTexts;
  blocks: Array<FooterBlock>;
  lang: Language
}

declare type FooterOwnProps = {
  textUnderLogo: LocalTexts;
  subscribeOfferHeader: LocalTexts;
  subscribeOfferText: LocalTexts;
  blocks: Array<FooterBlock>;
}

declare type FooterBlock  = {
  header: LocalTexts,
  hrefs: Array<Href>
}