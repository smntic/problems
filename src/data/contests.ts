import { Contest, ProblemStatus } from "@/types";

export const contests: Contest[] = [
  {
    name: "CF Round 1042",
    notes: "Some notes about this contest",
    problems: [
      { name: "A", index: "A", status: ProblemStatus.Solved, notes: "Easy problem. This was very easy." },
      { name: "B", index: "B", status: ProblemStatus.NotAttempted, notes: "Hard problem" },
    ],
  },
  {
    name: "James",
    notes: "Notes about James contest",
    problems: [
      { name: "A", index: "A", status: ProblemStatus.NeedsImplementation },
      { name: "B", index: "B", status: ProblemStatus.VeryHard },
      { name: "C", index: "C", status: ProblemStatus.NeedsReview },
    ],
  },
];

