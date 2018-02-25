/* TODO: Mock up the rest of this file the app is relying on 
 * a state machine instead of using if/else logic to show parts of the application.
 * You need to figure out how to best split the drag and drop window view from
 * the font list view. Therefore, the way you have the state machine set up 
 * may not be the best way. Perhaps you don't need a "start" state, 
 * and instead you just need a "hasFont" and "noFont" states. 
 *
 * I'd go ahead and mock up state machine version without trying to get it running. 
 * Then once the code looks good, hop back into the original index.js file and 
 * slowly add pieces in. 
 * 
 * Just make sure to run/build and git commit before you start adding 
 * state machines. 
 *
 * If you get this done, the code should be pretty maintainable. No clue how 
 * you'd animate it all though!
 *
 */
import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import { H1, H4 } from "../components/Headings";
import { Main, Sidebar } from "../components/Grid";
import HorizontalRule from "../components/HorizontalRule";
import Link from "../components/Link";
import FontUploadViewer from "../components/FontUploadViewer/FontUploadViewer";
import FontFeaturesList from "../components/FontFeaturesList";
import { BREAKPOINTS } from "../utils/css-variables";

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
    UPDATE: "loading"
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
    UPDATE: "loading"
  },
  hasFont: {
    UPDATE: "loading"
  }
};

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

const initialState = "noFont";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      app: "noFont", // finite state

      font: {
        name: null,
        features: [],
        fmCapitalHeight: null,
        fmDescender: null,
        fmAscender: null
      }
    };
  }

  command(nextState, action) {
    switch (nextState) {
      case "updating":
        // get font data
        this.loading(action.getFontData);
        break;
      case "app":
        break;
      case "hasFont":
        this.updateCSS(action.updateCSS);
        this.updateLeftNav(action.updateLeftNav);
        break;
      default:
        break;
    }
  }

  transition(action) {
    const currentappState = this.state.app;
    const nextappState = appMachine[currentappState][action.type];

    if (nextappState) {
      const nextState = this.command(nextappState, action);

      this.setState({
        app: nextappState,
        ...nextState
      });
    }
  }

  getFontData(item, monitor) {
    let file;
    let font = null;
    const reader = new FileReader();

    if (monitor) {
      // If a user is using drag and drop
      const droppedFiles = monitor.getItem().files;

      this.setState({ droppedFiles });

      file = droppedFiles[0];
    } else {
      // If a user is using file upload instead of drag and drop.
      file = item.target.files[0];
    }

    reader.onload = function(droppedFiles) {
      try {
        font = opentype.parse(droppedFiles.target.result);
        getFeatureList(font);
        //transition('noFont', 'UPDATE'); => updating
      } catch (err) {
        console.log(err);
      }
    };

    reader.onerror = function(err) {
      console.log(err);
    };

    reader.readAsArrayBuffer(file);
  }

  updateCSS() {
    return null;
  }

  updateLeftNav() {
    return null;
  }

  renderUploadViewer(state) {
    if (state === "hasFont") {
      return [
        <H3>{this.state.font.name}</H3>,
        <H3>
          {this.state.font.features.map(
            feature =>
              feature.length === index + 1 ? (
                <Link href={`#${feature.code}`}>{feature.code}</Link>
              ) : (
                [<Link href={`#${feature.code}`}>{feature.code}</Link>, <br />]
              )
          )}
        </H3>
      ];
    } else {
      (
        <P>
          Check which typographic features your font supports. Don’t worry, your
          fonts aren’t stored. Everything happens in{" "}
          <NoWrap>your browser.</NoWrap>
        </P>
      ),
        <DragAndDrop />;
    }
  }

  renderFontFeatureList(state) {
    if (state !== "photo") return;

    return <FontFeatureList features={this.state.font.features} />;
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
          <Footer />
        </Sidebar>
        <Main>{this.renderFontFeatureList(appState)}</Main>
      </PageWrapper>
    );
  }
}
