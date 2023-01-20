# stylelint-config-selleo

Linter for styles, configurable with 3 variants:
* SCSS syntax
* SASS syntax
* BEM methodology

## Installation

```
npm i --save-dev stylelint
npm i --save-dev stylelint-config-selleo
```

## Usage

Set your `stylelintrc.json` config to:

```json
{
  "extends": "stylelint-config-selleo"
}
```

## IDE setup

### VSCode
1. Install [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) plugin.
2. Go to `Preferences > Settings`.
3. Search for `stylelint`.
4. Inside `Stylelint: Snippet` and `Stylelint: Validate` add `scss` or `sass`.

### JetBrains (RubyMine, WebStorm)
1. Go to `Preferences > Languages & Frameworks > Style Sheets > Stylelint`. 
2. Click Enable.
3. Inside Run for files enter `{**/*,*}.{css,scss,sass}`.

## TODO:
* working BEM checker for SASS
* rules update
* github actions
* block commits that don't pass the rules 