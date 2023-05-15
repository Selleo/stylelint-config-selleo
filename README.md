# stylelint-config-selleo


Linter for styles, configurable with 3 variants:
* CSS & SCSS syntax
* BEM methodology
* SASS syntax

---
# Installation
## Target repo
Minimum Node.js version: `16`
---

- `npm i --save-dev stylelint`
- `npm i --save-dev stylelint-config-selleo`
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

---
# CLI / CI
Run `npm run stylelint-config-selleo` to see all available commands:
```
fix-all         Run auto fix for all changed files
fix-current     Run auto fix for currently changed files
help            Display help for stylelint-config-selleo.
init            Initialize the Stylelint Selleo Config by selecting extensions
list-all        List all styles issues
list-current    List styles issues for currently changed files
plugins         List installed plugins.
```

## About Selleo

![selleo](https://raw.githubusercontent.com/Selleo/selleo-resources/master/public/github_footer.png)

Software development teams with an entrepreneurial sense of ownership at their core delivering great digital products and building culture people want to belong to. We are a community of engaged co-workers passionate about crafting impactful web solutions which transform the way our clients do business.

All names and logos for [Selleo](https://selleo.com/about) are trademark of Selleo Labs Sp. z o.o. (formerly Selleo Sp. z o.o. Sp.k.)
