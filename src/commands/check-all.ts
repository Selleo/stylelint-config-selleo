import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class CheckAll extends Command {
  static description = "Check if some stylelint issues occur for all files";

  public async run(): Promise<void> {
    const listAllIssues = `stylelint **/*.{scss,css,sass}`;

    exec(listAllIssues, (error, stdout) => {
      console.error(stdout);
      if (error) throw new Error("Some style issues ocurred");
    });
  }
}
