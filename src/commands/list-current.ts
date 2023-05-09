import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class ListCurrent extends Command {
  static description = "List styles issues for currently changed files";

  public async run(): Promise<void> {
    const currenBranchCmd = `git branch  --no-color  | grep -E '^\*'`;
    const listCurrentIssues = `git diff $(${currenBranchCmd}) --name-only  --diff-filter=AM -- '*.scss' '*.css' | tail | xargs -r stylelint`;

    exec(listCurrentIssues, (_, stdout) => {
      console.log(stdout);
    });
  }
}
