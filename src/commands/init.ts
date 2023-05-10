import { Command } from "@oclif/core";
import * as inquirer from "inquirer";
import * as fs from "fs/promises";
import { logAvailableCommands } from "../available-commands";

const extensions = [
  { name: "CSS & SCSS", value: "core" },
  { name: "BEM", value: "bem" },
  { name: "SASS", value: "sass" },
];

export class Init extends Command {
  static description =
    "Initialize the Stylelint Selleo Config by selecting extensions";

  public async run(): Promise<void> {
    const { selectedExtensions } = await (inquirer as any).prompt([
      {
        name: "selectedExtensions",
        type: "checkbox",
        message:
          "Welcome to Selleo Stylelint Config! Please select extensions:",
        choices: extensions.map(({ name }) => name),
      },
    ]);

    StylelintExtensions.create(selectedExtensions);
    logAvailableCommands();
  }
}

export class StylelintExtensions {
  private readonly STYLELINT_CONFIG_SELLEO = `stylelint-config-selleo`;
  private readonly fileString = ".stylelintrc.json";

  static create(choices: string[]) {
    new StylelintExtensions(choices);
  }

  constructor(choices: string[]) {
    this._handleConfigFile(choices);
  }

  private async _handleConfigFile(choices: string[]) {
    const extensionsValues = this._getExtensionsValues(choices);
    const fileData = this._generateFileData(extensionsValues);
    await this._createFile(fileData);
  }

  private _getExtensionsValues(choices: string[]): string[] {
    const extensionsValues = extensions
      .filter(({ name }) => choices.includes(name))
      .map(({ value }) => `${this.STYLELINT_CONFIG_SELLEO}/${value}`);

    return extensionsValues;
  }

  private _generateFileData(extensionsValues: string[]): string {
    return JSON.stringify({ extends: extensionsValues }, null, 2);
  }

  private async _createFile(fileData: string): Promise<void> {
    const filePath = `${process.cwd()}/${this.fileString}`;
    await fs.writeFile(filePath, fileData);
  }
}
