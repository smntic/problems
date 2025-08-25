'use client';

import React from "react";
import { Problem, PopupTarget } from "@/types";

interface ProblemCellProps {
  problem: Problem;
  cellSize: number;
  borderClass: string;
  statusColor: Record<Problem["status"], string>;
  onClick: (target: PopupTarget, x: number, y: number) => void;
}

export default function ProblemCell({ problem, cellSize, borderClass, statusColor, onClick }: ProblemCellProps) {
  return (
    <div
      style={{ width: `${cellSize}em`, height: `${cellSize}em` }}
      className={`flex items-center justify-center border ${borderClass} cursor-pointer ${statusColor[problem.status]}`}
      onClick={(e) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        onClick({ type: "problem", data: problem }, rect.left, rect.bottom);
      }}
    >
      {problem.index}
    </div>
  );
}
