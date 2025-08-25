export enum ProblemStatus {
  Solved = "Solved",
  NeedsReview = "Needs review",
  NeedsImplementation = "Needs implementation",
  VeryHard = "Very hard",
  NotAttempted = "Not attempted",
}

export interface Problem {
  name: string;
  index: string;
  status: ProblemStatus;
  notes?: string;
}

export interface Contest {
  name: string;
  problems: Problem[];
  notes?: string;
}

export type PopupTarget = 
  | { type: "problem"; data: Problem }
  | { type: "contest"; data: Contest };
