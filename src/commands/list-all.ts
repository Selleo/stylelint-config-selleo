import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class ListAll extends Command {
  static description = "List all styles issues";

  public async run(): Promise<void> {
    const listAllIssues = `stylelint **/*.{scss,css}`;

    exec(listAllIssues, (_, stdout) => {
      console.log(stdout);
    });
  }
}
