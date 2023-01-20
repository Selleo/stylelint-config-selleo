module.exports = {
  "extends":[ "stylelint-config-recommended", "stylelint-config-recommended-scss"],
  "plugins": [
    "stylelint-declaration-strict-value",
    "stylelint-order"
  ],
  "rules": {
    "scale-unlimited/declaration-strict-value": [[
      "background",
      "background-color",
      "color",
      "margin",
      "padding"
    ],
      {
        "ignoreFunctions": {
          "margin": false
        }
      }],
    "number-leading-zero": "never",
    "number-max-precision": 2
  }
}