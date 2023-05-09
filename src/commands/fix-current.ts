import { Command } from "@oclif/core";
import { exec } from "child_process";

export default class FixCurrent extends Command {
  static description = "Run auto fix for currently changed files";

  public async run(): Promise<void> {
    const currenBranchCmd = `git branch  --no-color  | grep -E '^\*'`;
    const fixCurrentChanges = `git diff $(${currenBranchCmd}) --name-only  --diff-filter=AM -- '*.scss' '*.css' | tail | xargs -r stylelint --fix --quiet`;

    exec(fixCurrentChanges);
  }
}
