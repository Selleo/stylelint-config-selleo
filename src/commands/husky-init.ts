import { Command } from "@oclif/core";
import { exec } from "child_process";
import { readFile, writeFile } from "fs/promises";

type Scripts = {
  scripts: {
    [key: string]: string;
  };
};

export default class HuskyInit extends Command {
  static description = "Init husky pre-commit check";
  private readonly _packageJsonFile = "package.json";
  private readonly _absolutePath = `${process.cwd()}`;

  public async run(): Promise<void> {
    this._installHusky();
    this._enableGitHooks();
    const packageJsonFile = await this._readFile();
    this._addHuskyScript(packageJsonFile);
    this._writeFile(JSON.stringify(packageJsonFile, null, 2));
    this._createHook();
  }

  private _installHusky(): void {
    const cmd = `npm install husky --save-dev`;
    exec(cmd);
  }

  private _enableGitHooks(): void {
    const cmd = `npx husky install`;
    exec(cmd);
  }

  private _addHuskyScript(packageJsonFile: Scripts): void {
    packageJsonFile.scripts["prepare"] = "husky install";
  }

  private _createHook(): void {
    const cmd = `npx husky add .husky/pre-commit "npm run stylelint-config-selleo check-current"`;
    exec(cmd);
  }

  private async _readFile(): Promise<Scripts> {
    const file = await readFile(
      `${this._absolutePath}/${this._packageJsonFile}`,
      { encoding: "utf8" }
    );

    return JSON.parse(file);
  }

  private async _writeFile(file: string): Promise<void> {
    await writeFile(`${this._absolutePath}/${this._packageJsonFile}`, file);
  }
}
