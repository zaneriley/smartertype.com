const FONT_FEATURES = [
  {
    tag: "frac",
    title: "Fractions",
    name: "fractions",
    componentName: "Fractions",
    description:
      "Special glyphs that make it easier to read fractional forms, especially in passages of text, like in a recipe."
  },
  {
    tag: "liga",
    title: "Standard Ligatures",
    name: "standard-ligatures",
    componentName: "StandardLigatures",
    description:
      "The combination of two or more characters that form a new glyph. This is to often avoid collision between two characters that appear together."
  },
  {
    tag: "onum",
    title: "Oldstyle Figures",
    name: "oldstyle-figures",
    componentName: "OldstyleFigures",
    description:
      "Numerical figures with varying heights and vertical alignments. In some typefaces, Oldstyle Figures have aesthetic and functional differences."
  },
  {
    tag: "sinf",
    title: "Scientific Inferiors",
    name: "scientific-inferiors",
    componentName: "ScientificInferiors",
    description:
      "Numerical figures that sit below the baseline and are made to be more legible at smaller sizes. Similiar to Subscript, these are ideal for chemical notations."
  },
  {
    tag: "subs",
    title: "Subscript",
    name: "subscript",
    componentName: "Subscript",
    description:
      "Numerical figures that sit below the baseline and are made to be more legible at smaller sizes. Similiar to Scientific Inferiors, these are ideal for chemical notations."
  }
];

export default FONT_FEATURES;
