# stylelint-config-selleo


Linter for styles, configurable with 3 variants:
* CSS & SCSS syntax
* BEM methodology
* SASS syntax

---
# Installation
## This repo
Minimum Node.js version: `16`

- `clone this repository`
- `npm i `
- `npm run build`
- `npm pack`

This will create a `.tgz` file that you need to link to in the target repository.

## Target repo
- `npm i --save-dev stylelint`
- `npm i '/path/to/stylelint-config-selleo.tgz'` file
- in the `package.json` add:
  ```json 
    "scripts": {
      "stylelint-config-selleo": "stylelint-config-selleo"
    }
  ```

- run `npm run stylelint-config-selleo init`
- select appropriate extensions
- in your project root directory `.stylelintrc.json` file will appear with previously selected extensions

If you use `prettier`:
Create or update existing `.prettierignore` following rule - ignore prettier for css, sccs and sass files - use stylelint by default
``` 
**/*.css
**/*.scss
**/*.sass
```

## CLI / CI Commands
Run `npm run stylelint-config-selleo` to see all available commands.

Run `npm run stylelint-config-selleo [command]` to run a command.
```
`init`           Initialize the Stylelint Selleo Config by selecting extensions
`husky-init`     Init husky pre-commit check
`check-all`      Check if some stylelint issues occur for all files
`check-current`  Check if some stylelint issues occur for current changes
`fix-all`        Run auto fix for all changed files
`fix-current`    Run auto fix for currently changed files
`list-all`       List all styles issues
`list-current`   List styles issues for currently changed files
`help`           Display help for stylelint-config-selleo
```

### Install pre-commit check
- `npm i husky`
- `npm run stylelint-config-selleo husky-init`

---
# IDE setup

## VSCode
1. Install [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) plugin.
2. Go to `Preferences > Settings`.
3. Search for `stylelint`.
4. Inside `Stylelint: Snippet` and `Stylelint: Validate` add `scss` or `sass`.

#### Autofix on file save
1. Open VSCode settings in the `json` format
2. Paste following rule at the end of file
```json    
  "editor.codeActionsOnSave": {
		"source.fixAll.stylelint": true
	},
```

## JetBrains (RubyMine, WebStorm)
1. Go to `Preferences > Languages & Frameworks > Style Sheets > Stylelint`. 
2. Click Enable.
3. Inside Run for files enter `{**/*,*}.{css,scss,sass}` - without spaces between file extensions!

#### Autofix on file save
1. Open WebStorm `Preferences > Tools > File Watchers`
2. Click `+/Add > <custom>`
3. Provide watcher name ie `stylelint-auto-fix`
4. Change `File type` to `Any`
5. Set `Program` to `$ProjectFileDir$/node_modules/stylelint/bin/stylelint.js`
6. Set `Arguments` to `$FilePath$ --fix`
7. Set `Working directory` to `$ProjectFileDir$`
8. Open `Advanced Options` and let only `Trigger the watcher on external changes` checked
9. Save and Apply changes

#### Add External Tools
This is a workaround for [this issue](https://github.com/Selleo/stylelint-config-selleo/issues/12). It will
not work on file save, but you can instead run it by `Right Click > External Tools - stylelint-auto-fix`. 
1. Open WebStorm `Preferences > Tools > External Tools`
2. Click `+/Add`
3. Provide name ie `stylelint-auto-fix`
4. Set `Program` to `$ProjectFileDir$/node_modules/stylelint/bin/stylelint.js`
5. Set `Arguments` to `$FilePath$ --fix`
6. Set `Working directory` to `$ProjectFileDir$`
7. Save and Apply changes
