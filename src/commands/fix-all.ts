import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class FixAll extends Command {
  public async run(): Promise<void> {
    const fixAllChanges = `stylelint **/*.{scss,css} --fix`;

    exec(fixAllChanges);
  }
}
