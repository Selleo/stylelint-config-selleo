module.exports = {
  "rules": {
    "selector-class-pattern": [
      "^([a-z0-9']+)-([a-z0-9']+)$|^-([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^([a-z0-9']+)$|^([a-z0-9']+)__([a-z0-9']+)$",
      {
        "message": "Please follow BEM naming conventions",
        "resolveNestedSelectors": true
      }
    ]
  }
}
