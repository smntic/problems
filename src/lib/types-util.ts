import { Contest, PopupTarget, Problem } from "@/types";

export function samePopupTarget(target1: PopupTarget, target2: PopupTarget): boolean {
  if (target1.type === "problem" && target2.type == "problem") return sameProblem(target1.data, target2.data);
  if (target1.type === "contest" && target2.type == "contest") return sameContest(target1.data, target2.data);
  return false;
}

export function sameProblem(problem1: Problem, problem2: Problem): boolean {
  return problem1.name === problem2.name && problem1.index === problem2.index;
}

export function sameContest(contest1: Contest, contest2: Contest): boolean {
  return contest1.name === contest2.name;
}

