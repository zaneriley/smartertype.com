/* TODO: You should figure how if you want to render the H2 with the font uploaded by 
 * using CSS or by using Opentype.js. Either way is going to involve some interesting math problems.
 *
 * After that, it'd be worth cleaning up a lot of the styling issues going on, 
 * especially on smaller break points. 
 *
 * I need to clean up the feature data so that it doesn't break and isn't so brittle.
 * I also need to either keep a master list separate or make it so non-existant components don't break the rendering. 
 *
 * NOTE: Double check that linting doesn't break FontFeatureList
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

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${BREAKPOINTS.medium}px) {
    flex-wrap: nowrap;
  }
`;

const AppMachine = {
  noFont: {
    UPDATE: "updating"
  },
  updating: {
    UPDATE_SUCCESS: "hasFont",
    UPDATE_FAILURE: "error",
    // WRONG FILE TYPE
    // MORE THAN A SINGLE FILE
    CANCEL_UPDATE: "noFont"
    // CLEAR FONT ?
  },
  error: {
    UPDATE: "updating"
  },
  hasFont: {
    UPDATE: "updating"
  }
};

/* TODO: Move this <Toggle />. */
const fontFeatureMachine = {
  opentype: {
    BROWSER: "browser",
    RESET: "reset"
  },
  browser: {
    OPENTYPE: "opentype",
    RESET: "reset"
  },
  reset: {
    OPENTYPE: "opentype",
    BROWSER: "browser"
  },
  info: {
    SHOW_INFO: "info"
  }
};

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
        const fontFeatures = getFeatureList(fontData);

        const font = {
          name: fontData.names.fontFamily.en, // "Source Sans Pro"
          features: fontFeatures,
          fmCapitalHeight: fontData.tables.os2.sCapHeight / 1000, // 0.66
          fmDescender: fontData.descender / -1000, // 0.273
          fmAscender: fontData.ascender / 1000 // 0.984
        };
        this.transition("UPDATE", font);
        this.handleUpdate();
      } catch (err) {
        console.log(err);
      }
    };

    reader.onerror = err => {
      console.log(err);
    };

    reader.readAsArrayBuffer(file);
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
      console.log(this.state);
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

  updateCSS() {
    return null;
  }

  renderUploadViewer(state) {
    if (state === "hasFont") {
      return [
        <H2 center>{this.state.name}</H2>,
        <H3>
          {this.state.features.map((feature, index) => [
            <Link href={`#${feature.tag}`}>{feature.title}</Link>,
            <br />
          ])}
        </H3>
      ];
    }
    return [
      <P>
        Check which typographic features your font supports. Don’t worry, your
        fonts aren’t stored. Everything happens in{" "}
        <NoWrap>your browser.</NoWrap>
      </P>,
      <DragAndDrop onChange={this.getFontData} />
    ];
  }

  renderFontFeaturesList(state) {
    const features = this.state.features;
    console.log(features);
    return <FontFeaturesList features={features} />;
  }

  render() {
    const appState = this.state.app;

    return (
      <PageWrapper>
        <Meta />
        <Sidebar>
          <H1>
            Smarter <br />Typography
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
        </Sidebar>
        <Main>{this.renderFontFeaturesList(appState)}</Main>
      </PageWrapper>
    );
  }
}
