import React from "react";
import PropTypes from "prop-types";
import FontFeature from "./FontFeature";
import HorizontalRule from "./HorizontalRule";
import * as Features from "./Features";

const MOCK_FEATURES = {
  sups: {
    title: "Superior Figures",
    name: "superior-figures",
    componentName: "SuperiorFigures"
  },
  liga: {
    title: "Standard Ligatures",
    name: "standard-ligatures",
    componentName: "StandardLigatures"
  },
  subs: {
    title: "Subscript",
    name: "subscript",
    componentName: "Subscript"
  },
  onum: {
    title: "Oldstyle Figures",
    name: "oldstyle-figures",
    componentName: "OldstyleFigures"
  },
  sinf: {
    title: "Scientific Inferiors",
    name: "scientific-inferiors",
    componentName: "ScientificInferiors"
  },
  frac: {
    title: "Fractions",
    name: "fractions",
    componentName: "Fractions"
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
  const FeaturesList = Object.keys(MOCK_FEATURES).map((key, index) => {
    return [
      <FontFeature
        title={MOCK_FEATURES[key].title}
        name={MOCK_FEATURES[key].name}
        feature={getComponentByName(MOCK_FEATURES[key].componentName)}
        key={`feature-${MOCK_FEATURES[key].name}`}
      />,
      <HorizontalRule wide key={`hr-${MOCK_FEATURES[key].name}`} />
    ];
  });

  return <div>{FeaturesList}</div>;
}
