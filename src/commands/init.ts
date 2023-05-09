import { Command } from "@oclif/core";
import * as inquirer from "inquirer";
import * as fs from "fs/promises";

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
