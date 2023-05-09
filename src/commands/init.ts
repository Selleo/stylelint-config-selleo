import { Command } from "@oclif/core";
import * as inquirer from "inquirer";
import * as fs from "fs/promises";
// import { readFileSync } from "fs";

const extentions = [
  { name: "BEM", value: "bem" },
  { name: "SCSS", value: "core" },
  { name: "SASS", value: "scss" },
];

export class Init extends Command {
  static description =
    "Initialize the Stylelint Selleo Config by slectiong extentions";

  public async run(): Promise<void> {
    const { selectedExtentions } = await (inquirer as any).prompt([
      {
        name: "selectedExtentions",
        type: "checkbox",
        message: "Select extensions",
        choices: extentions.map(({ name }) => name),
      },
    ]);

    StylelintExtentions.create(selectedExtentions);
  }
}

export class StylelintExtentions {
  private readonly STYLELINT_CONFIG_SELLEO = `stylelint-config-selleo`;
  private readonly fileString = ".stylelintrc.json";

  static create(choices: string[]) {
    new StylelintExtentions(choices);
  }

  constructor(choices: string[]) {
    this._handleConfigFile(choices);
  }

  private async _handleConfigFile(choices: string[]) {
    const extentionsValues = this._getExtentionsValues(choices);
    const fileData = this._generateFileData(extentionsValues);
    await this._createFile(fileData);
  }

  private _getExtentionsValues(choices: string[]): string[] {
    const extentionsValues = extentions
      .filter(({ name }) => choices.includes(name))
      .map(({ value }) => `${this.STYLELINT_CONFIG_SELLEO}/${value}`);

    return extentionsValues;
  }

  private _generateFileData(extentionsValues: string[]): string {
    return JSON.stringify({ extends: extentionsValues }, null, 2);
  }

  private async _createFile(fileData: string): Promise<void> {
    const filePath = `${process.cwd()}/${this.fileString}`;
    await fs.writeFile(filePath, fileData);
  }
}

// type Script = {
//   name: string;
//   value: string;
// };

// type PackageJsonScripts = { scripts: { [key: string]: string } };

// class PackageJsonLinterScripts {
//   private readonly packageJsonFileString = "package.json";

//   static addScripts(scriptsNames: string[]) {
//     new PackageJsonLinterScripts(scriptsNames);
//   }

//   constructor(scriptsNames: string[]) {
//     this._handleScripts(scriptsNames);
//   }

//   private async _handleScripts(scriptsNames: string[]): Promise<void> {
//     const preparedScriptsData = this._prepareFixScriptsData(scriptsNames);
//     const packageJson = await this._readFile();
//     this._overwritePackageJsonScripts(preparedScriptsData, packageJson);
//     await this._saveFileChanges(JSON.stringify(packageJson, null, 2));
//   }

//   private _overwritePackageJsonScripts(
//     preparedScriptsData: Script[],
//     packageJson: PackageJsonScripts
//   ): void {
//     preparedScriptsData.forEach(({ name, value }) => {
//       packageJson.scripts[name] = value;
//     });
//   }

//   private _prepareFixScriptsData(scriptsNames: string[]): Script[] {
//     const preparedScriptsData = scriptsNames.map((scriptName, i) => {
//       if (fixScripts[i].name === scriptName) return fixScripts[i];
//       return { ...fixScripts[i], name: scriptName };
//     });

//     return preparedScriptsData;
//   }

//   private async _saveFileChanges(fileData: string): Promise<void> {
//     const filePath = `${process.cwd()}/${this.packageJsonFileString}`;
//     await fs.writeFile(filePath, fileData);
//   }

//   private async _readFile(): Promise<PackageJsonScripts> {
//     const filePath = `${process.cwd()}/${this.packageJsonFileString}`;
//     const file = readFileSync(filePath) as unknown as string;
//     return JSON.parse(file);
//   }
// }
