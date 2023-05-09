import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class CheckCurrent extends Command {
  static description =
    "Check if some stylelint issues occur for current changes";

  public async run(): Promise<void> {
    const currenBranchCmd = `git branch  --no-color  | grep -E '^\*'`;
    const listCurrentIssues = `git diff $(${currenBranchCmd}) --name-only  --diff-filter=AM -- '*.scss' '*.css' | tail | xargs -r stylelint`;

    exec(listCurrentIssues, (error, stdout) => {
      console.error(stdout);
      if (error) throw new Error("Some style issues ocurred");
    });
  }
}
