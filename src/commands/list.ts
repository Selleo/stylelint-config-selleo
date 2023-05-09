import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class List extends Command {
  static description = "List all styles issues";

  public async run(): Promise<void> {
    const fixAllChanges = `stylelint **/*.{scss,css}`;

    exec(fixAllChanges, (_, stdout) => {
      console.log(stdout);
    });
  }
}
