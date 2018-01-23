import React from "react";
import PropTypes from "prop-types";
import FontFeature from "./FontFeature";
import HorizontalRule from "./HorizontalRule";
import * as Features from "./Features";

const MOCK_FEATURES = {
  sups: {
    title: "Superior Figures",
    name: "superior-figures",
    componentName: "SuperiorFigures",
    description:
      "Numerical figures that sit above the baseline and are made to be more legible at smaller sizes. Ideal for footnotes and math formulas."
  },
  liga: {
    title: "Standard Ligatures",
    name: "standard-ligatures",
    componentName: "StandardLigatures",
    description:
      "The combination of two or more characters that form a new glyph. This is to often avoid collision between two characters that appear together."
  },
  subs: {
    title: "Subscript",
    name: "subscript",
    componentName: "Subscript",
    description:
      "Numerical figures that sit below the baseline and are made to be more legible at smaller sizes. Similiar to Scientific Inferiors, these are ideal for chemical notations."
  },
  onum: {
    title: "Oldstyle Figures",
    name: "oldstyle-figures",
    componentName: "OldstyleFigures",
    description:
      "Numerical figures with varying heights and vertical alignments. In some typefaces, Oldstyle Figures have aesthetic and functional differences."
  },
  sinf: {
    title: "Scientific Inferiors",
    name: "scientific-inferiors",
    componentName: "ScientificInferiors",
    description:
      "Numerical figures that sit below the baseline and are made to be more legible at smaller sizes. Similiar to Subscript, these are ideal for chemical notations."
  },
  frac: {
    title: "Fractions",
    name: "fractions",
    componentName: "Fractions",
    description:
      "Special glyphs that make it easier to read fractional forms, especially in passages of text, like in a recipe."
  }
};

function getComponentByName(name) {
  switch (name) {
    case name:
      const ComponentName = Features[name];
      return <ComponentName />;
    default:
      return null;
  }
}

export default function FontFeaturesList() {
  const FeatureListLength = Object.keys(MOCK_FEATURES).length;

  const FeaturesList = Object.keys(MOCK_FEATURES).map((key, index) => {
    if (FeatureListLength === index + 1) {
      return (
        <FontFeature
          title={MOCK_FEATURES[key].title}
          name={MOCK_FEATURES[key].name}
          description={MOCK_FEATURES[key].description}
          feature={getComponentByName(MOCK_FEATURES[key].componentName)}
          key={`feature-${MOCK_FEATURES[key].name}`}
        />
      );
    } else {
      return [
        <FontFeature
          title={MOCK_FEATURES[key].title}
          name={MOCK_FEATURES[key].name}
          description={MOCK_FEATURES[key].description}
          feature={getComponentByName(MOCK_FEATURES[key].componentName)}
          key={`feature-${MOCK_FEATURES[key].name}`}
        />,
        <HorizontalRule wide key={`hr-${MOCK_FEATURES[key].name}`} />
      ];
    }
  });

  return <div>{FeaturesList}</div>;
}
