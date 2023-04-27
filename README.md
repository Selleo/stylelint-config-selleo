# stylelint-config-selleo

Linter for styles, configurable with 3 variants:
* SCSS syntax
* SASS syntax
* BEM methodology

## Installation

```
npm i --save-dev stylelint
npm i --save-dev https://github.com/Selleo/stylelint-config-selleo
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

Autofix on file save.
1. Open VSCode settings in the `json` format
2. Paste following rule at the end of file
```json    
  "editor.codeActionsOnSave": {
		"source.fixAll.stylelint": true
	},
```

### JetBrains (RubyMine, WebStorm)
1. Go to `Preferences > Languages & Frameworks > Style Sheets > Stylelint`. 
2. Click Enable.
3. Inside Run for files enter `{**/*,*}.{css,scss,sass}` - without spaces between file extensions!

Autofix on file save. 
1. Open WebStorm `Preferences > Tools > File Watchers`
2. Click `+/Add > <custom>`
3. Provide watcher name ie `stylelint-auto-fix`
4. Change `File type` to `Any`
5. Set `Program` to `$ProjectFileDir$/node_modules/stylelint/bin/stylelint.js`
6. Set `Arguments` to `$FilePath$ --fix`
7. Set `Working directory` to `$ProjectFileDir$`
8. Open `Advanced Options` and let only `Trigger the watcher on external changes` checked
9. Save and Apply changes

Add External Tools (workaround for [this issue](https://github.com/Selleo/stylelint-config-selleo/issues/12)). It will
not work on file save, but you can instead run it by `Right Click > External Tools - stylelint-auto-fix`. 
1. Open WebStorm `Preferences > Tools > External Tools`
2. Click `+/Add`
3. Provide name ie `stylelint-auto-fix`
4. Set `Program` to `$ProjectFileDir$/node_modules/stylelint/bin/stylelint.js`
5. Set `Arguments` to `$FilePath$ --fix`
6. Set `Working directory` to `$ProjectFileDir$`
7. Save and Apply changes

### CLI / CI
1. Add following scripts to your `package.json`
2. 
```json
  "scripts": {
    "stylelint-list": "stylelint **/*,*.{css,scss,sass}"
    "stylelint-auto-fix": "stylelint **/*.{css,scss} --fix"
  }
```
2. Run it with npm
```
npm run stylelint-list
npm run stylelint-auto-fix
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
