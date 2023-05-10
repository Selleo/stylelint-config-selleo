import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class FixAll extends Command {
  static description = "Run auto fix for all changed files";

  public async run(): Promise<void> {
    const fixAllChanges = `stylelint **/*.{scss,css,sass} --fix`;

    exec(fixAllChanges);
  }
}
