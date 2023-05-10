export const availableCommands: { command: string; description: string }[] = [
  {
    command: "init",
    description:
      "Initialize the Stylelint Selleo Config by selecting extensions",
  },
  {
    command: "husky-init",
    description: "Init husky pre-commit check",
  },
  {
    command: "check-all",
    description: "Check if some stylelint issues occur for all files",
  },
  {
    command: "check-current",
    description: "Check if some stylelint issues occur for current changes",
  },
  {
    command: "fix-all",
    description: "Run auto fix for all changed files",
  },
  {
    command: "fix-current",
    description: "Run auto fix for currently changed files",
  },
  {
    command: "list-all",
    description: "List all styles issues",
  },
  {
    command: "list-current",
    description: "List styles issues for currently changed files",
  },
];

export const logAvailableCommands = () => {
  console.log("");
  const allCommands = availableCommands
    .map(({ command }) => command)
    .sort((a, b) => b.length - a.length);

  const longestLenght = allCommands[0].length;

  console.log("COMMANDS");
  availableCommands.forEach(({ command, description }) =>
    console.log("  " + command.padEnd(longestLenght + 2, " "), description)
  );
};
