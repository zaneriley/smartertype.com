/* TODO: You should figure how if you want to render the H2 with the font uploaded by 
 * using CSS or by using Opentype.js. Either way is going to involve some interesting math problems.
 * UPDATE: Seems you can use the CSS font loading API to load it through FontFace. That may be the best bet.
 *
 * I need to clean up the feature data so that it doesn't break and isn't so brittle.
 * I also need to either keep a master list separate or make it so non-existant components don't break the rendering. 
 * 
 * See this issue here – https://github.com/nodebox/opentype.js/issues/62
 *
 * TODO: Add change notification animations around characters getting updated under OpenType.js
 */

import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H2, H3, P, NoWrap, H4 } from "../components/Headings";
import { Main, Sidebar } from "../components/Grid";
import { HorizontalRule } from "../components/HorizontalRule";
import Link from "../components/Link";
import DragAndDrop from "../components/DragAndDrop";
import FontFeaturesList from "../components/FontFeaturesList";
import { BREAKPOINTS } from "../utils/css-variables";
import FONT_FEATURES from "../components/FontFeature/features";

const opentype = require("opentype.js");

const AppMachine = {
  noFont: {
    UPDATE: "updating"
  },
  updating: {
    UPDATE_SUCCESS: "hasFont",
    // WRONG FILE TYPE
    WRONG_TYPE: "error",
    // MORE THAN A SINGLE FILE
    NO_FEATURES: "error"
  },
  error: {
    UPDATE: "updating"
  },
  hasFont: {
    UPDATE: "updating"
  }
};

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    flex-wrap: nowrap;
  }
`;

const InnerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width-prose);
  height: 100%;
  min-height: min-content;

  > * {
    flex-shrink: 0;
  }

  > * + * {
    margin-top: var(--spacing-base);
  }

  h2 + *,
  * + h2 {
    margin-top: var(--spacing-large);
  }
`;

/* TODO: Move these styled-components elsewhere. */
const Footer = styled.footer`
  grid-column: span 5;
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: 0;
  padding-top: var(--spacing-large);

  > * + * {
    margin-top: var(--spacing-base);
  }
`;

const getFeatureList = font => {
  const tags = new Set();
  const response = font.tables.gsub.features;

  // eslint-disable-next-line array-callback-return
  response.map(feature => {
    tags.add(feature.tag);
  });

  // convert to an array for comparison
  const FEATURE_TAGS = Array.from(tags.values());

  // filter our total list of features with what the font has
  const LIST_OF_FEATURES = FONT_FEATURES.filter(feature =>
    FEATURE_TAGS.includes(feature.tag)
  );

  return LIST_OF_FEATURES;
};

export default class App extends React.Component {
  constructor() {
    super();
    this.getFontData = this.getFontData.bind(this);

    this.state = {
      app: "noFont", // finite state
      name: null,
      features: FONT_FEATURES,
      fmCapitalHeight: null,
      fmDescender: null,
      fmAscender: null
    };
  }

  getFontData(item, monitor) {
    let file;
    if (monitor) {
      const droppedFiles = monitor.getItem().files;
      file = droppedFiles[0];
    } else {
      file = item.target.files[0];
    }
    const reader = new FileReader();

    reader.onload = droppedFiles => {
      try {
        const fontData = opentype.parse(droppedFiles.target.result);
        const UPLOADED_FONT_FEATURES = getFeatureList(fontData);

        const font = {
          name: fontData.names.fullName.en, // "Source Sans Pro"
          features:
            UPLOADED_FONT_FEATURES.length > 0
              ? UPLOADED_FONT_FEATURES
              : FONT_FEATURES,
          fmCapitalHeight: fontData.tables.os2.sCapHeight / 1000, // 0.66
          fmDescender: fontData.descender / -1000, // 0.273
          fmAscender: fontData.ascender / 1000 // 0.984
        };

        if (UPLOADED_FONT_FEATURES.length > 0) {
          this.transition("UPDATE", font);
          this.transition("UPDATE_SUCCESS");
        } else {
          this.transition("UPDATE", font);
          this.transition("NO_FEATURES");
        }
      } catch (err) {
        console.log(err);
      }

      const fileAsArrayBuffer = reader.result;
      const uploadedFont = new FontFace("Uploaded Font", fileAsArrayBuffer);
      // set fontface details
      // update fmCapitalHeight
      // update fmDescender
      // update fmAscender

      if (typeof window === "object" && window.document) {
        document.fonts.add(uploadedFont);
        uploadedFont.load();
      }
    };

    reader.readAsArrayBuffer(file);

    reader.onerror = err => {
      console.log(err);
    };
  }

  transition(action, e) {
    const currentappState = this.state.app;
    const nextappState = AppMachine[currentappState][action];

    if (nextappState) {
      const nextState = this.command(nextappState, action, e);
      this.setState({
        app: nextappState,
        ...nextState
      });
    }
  }

  /* eslint-disable consistent-return, class-methods-use-this */
  command(nextState, action, e) {
    switch (nextState) {
      case "updating": {
        // get font data
        const font = {
          name: e.name, // "Source Sans Pro"
          features: e.features, // ["liga"; "onum"]
          fmCapitalHeight: e.fmCapitalHeight, // 0.66
          fmDescender: e.fmDescender, // 0.273
          fmAscender: e.fmAscender // 0.943
        };
        return font;
      }
      case "noFont":
        break;
      case "hasFont":
        break;
      default:
        break;
    }
  }
  /* eslint-enable */

  handleUpdate() {
    this.transition("UPDATE_SUCCESS");
  }

  renderUploadViewer(state) {
    if (state === "hasFont") {
      return [
        <H2 center key={this.state.name} font={this.state.name}>
          {this.state.name}
        </H2>,
        <H3 key={"font-features"}>
          {this.state.features.map((feature, index) => [
            <Link href={`#${feature.tag}`} key={feature.title}>
              {feature.title}
            </Link>,
            <br key={`${feature.title}-${index}`} />
          ])}
        </H3>,
        <DragAndDrop onChange={this.getFontData} key={"drag-and-drop"} />
      ];
    } else if (state === "error") {
      return [
        <H2 center key={this.state.name} font={this.state.name}>
          {this.state.name}
        </H2>,
        <H3>Sorry, this font doesn't seem to have any demoable features.</H3>,
        <DragAndDrop onChange={this.getFontData} key={"drag-and-drop"} />
      ];
    }
    return [
      <P key="intro-paragraph" key={"intro-paragraph"}>
        Check which typographic features your font supports. Don’t worry, your
        fonts aren’t stored. Everything happens in{" "}
        <NoWrap>your browser.</NoWrap>
      </P>,
      <DragAndDrop onChange={this.getFontData} key={"drag-and-drop"} />
    ];
  }

  renderFontFeaturesList(state) {
    const features = this.state.features;
    return <FontFeaturesList features={features} />;
  }

  render() {
    const appState = this.state.app;

    if (typeof document !== "undefined") {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        });
      });
    }

    return (
      <PageWrapper>
        <Meta />
        <Sidebar>
          <InnerSidebar>
            <H1>
              <Link unstyled href="/" aria-label="SmarterType homepage">
                Smarter <br />Typography
              </Link>
            </H1>
            <HorizontalRule />
            {this.renderUploadViewer(appState)}
            <Footer>
              <H4 center>
                <Link
                  href="https://twitter.com/zaneriley"
                  rel="noopener"
                  target="_blank"
                >
                  Made by @zaneriley
                </Link>
              </H4>
            </Footer>
          </InnerSidebar>
        </Sidebar>
        <Main>{this.renderFontFeaturesList(appState)}</Main>
      </PageWrapper>
    );
  }
}
