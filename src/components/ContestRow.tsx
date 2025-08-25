'use client';

import React from "react";
import { Contest, PopupTarget, ProblemStatus } from "@/types";
import ProblemCell from "@/components/ProblemCell";

interface ContestRowProps {
  contest: Contest;
  maxProblems: number;
  cellSize: number;
  borderClass: string;
  emptyCellBg: string;
  statusColor: Record<ProblemStatus, string>;
  onClick: (target: PopupTarget, x: number, y: number) => void;
}

export default function ContestRow({ contest, maxProblems, cellSize, borderClass, emptyCellBg, statusColor, onClick }: ContestRowProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `12em repeat(${maxProblems}, ${cellSize}em)` }}>
      <div
        style={{ height: `${cellSize}em` }}
        className={`bg-black text-white flex items-center justify-start px-2 border ${borderClass} cursor-pointer`}
        onClick={(e) => {
          const rect = (e.target as HTMLDivElement).getBoundingClientRect();
          onClick({ type: "contest", data: contest }, rect.left, rect.bottom);
        }}
      >
        {contest.name}
      </div>

      {contest.problems.map(problem => (
        <ProblemCell
          key={problem.index}
          problem={problem}
          cellSize={cellSize}
          borderClass={borderClass}
          statusColor={statusColor}
          onClick={onClick}
        />
      ))}

      {Array.from({ length: maxProblems - contest.problems.length }).map((_, idx) => (
        <div
          key={`pad-${idx}`}
          style={{ width: `${cellSize}em`, height: `${cellSize}em` }}
          className={`${emptyCellBg} border ${borderClass}`}
        />
      ))}
    </div>
  );
}
