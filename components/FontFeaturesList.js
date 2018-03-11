import React from "react";
import PropTypes from "prop-types";
import FontFeature from "./FontFeature";
import HorizontalRule from "./HorizontalRule";
import * as Features from "./Features";

function getComponentByName(name) {
  switch (name) {
    case name: {
      const ComponentName = Features[name];
      return <ComponentName />;
    }
    default:
      return null;
  }
}

const FontFeaturesList = features => {
  const featuresArr = features["features"];
  const FeatureListLength = featuresArr.length;

  const FeaturesList = featuresArr.map((feat, index) => {
    const fontFeature = (
      <FontFeature
        title={feat.title}
        tag={feat.tag}
        name={feat.name}
        description={feat.description}
        feature={getComponentByName(feat.componentName)}
        key={`feature-${feat.tag}`}
      />
    );

    if (FeatureListLength === index + 1) {
      return [fontFeature];
    }
    return [fontFeature, <HorizontalRule wide key={`hr-${feat.tag}`} />];
  });

  return <div>{FeaturesList}</div>;
};

export default FontFeaturesList;
