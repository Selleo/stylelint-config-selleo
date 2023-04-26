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

Available extends: 
```json
"stylelint-config-selleo/core" - CSS & SCSS files
"stylelint-config-selleo/bem" - BEM ruleset
"stylelint-config-selleo/sass" - SASS files 
```


Set your `stylelintrc.json` config to:

```json
{
  "extends": ["stylelint-config-selleo/core", "other_extend_which_you_want_to_use"]
}
```

Create or update existing `.prettierignore` following rule - ignore prettier for css, sccs and sass files - use stylelint by default
``` 
**/*.css
**/*.scss
**/*.sass
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
3. Inside Run for files enter `{**/*,*}.{css,scss,sass}` - without spaces between file extensions!

### CLI / CI
1. Add script to your package.json,
```json
"lint-style": "stylelint \"{**/*,*}.{css,scss,sass}\""
```
2. Run it with npm
```
npm run lint-style
```

### To test/develop package before npm publish
```
   git clone git@github.com:Selleo/stylelint-config-selleo.git
   cd stylelint-config-selleo
   pwd
   ```
1. Copy path
2. Go to project which you want to lint
3. ```npm i path_from_your_clipboard```
4. ```npm run lint-styles```

## TODO:
* working BEM checker for SASS
* rules update
* add postinstall which add script to your project package.json
* github actions
* block commits that don't pass the rules 
