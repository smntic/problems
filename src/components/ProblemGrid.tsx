'use client';

import React, { useRef, useState, useEffect } from "react";
import { PopupTarget, ProblemStatus } from "@/types";
import { contests } from "@/data/contests";
import ContestRow from "@/components/ContestRow";
import Popup from "@/components/Popup";
import { samePopupTarget } from "@/lib/types-util";

export default function ContestGrid() {
  const cellBorder = "border-[#1a1a1a]";
  const emptyCellBg = "bg-[#111111]";
  const cellSize = 3; // em

  const maxProblems = Math.max(...contests.map(c => c.problems.length));

  const statusColor: Record<ProblemStatus, string> = {
    [ProblemStatus.Solved]: "bg-green-400",
    [ProblemStatus.NeedsReview]: "bg-cyan-400",
    [ProblemStatus.NeedsImplementation]: "bg-orange-400",
    [ProblemStatus.VeryHard]: "bg-red-400",
    [ProblemStatus.NotAttempted]: "bg-[#2a2a2a]",
    [ProblemStatus.AttemptLater]: "bg-[#474747]",
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<{ target: PopupTarget; x: number; y: number } | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSelected(null);
      }
    };
    document.addEventListener("mouseup", handleClick);
    return () => document.removeEventListener("mouseup", handleClick);
  }, []);

  const handleClick = (target: PopupTarget, x: number, y: number) => {
    if (!containerRef.current) return;
    if (selected && samePopupTarget(selected.target, target)) {
      setSelected(null);
      return;
    }
    const containerRect = containerRef.current.getBoundingClientRect();
    setSelected({ target, x: x - containerRect.left, y: y - containerRect.top });
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="grid">
        {contests.map(contest => (
          <ContestRow
            key={contest.name}
            contest={contest}
            maxProblems={maxProblems}
            cellSize={cellSize}
            borderClass={cellBorder}
            emptyCellBg={emptyCellBg}
            statusColor={statusColor}
            onClick={handleClick}
          />
        ))}
      </div>

      {selected && <Popup target={selected.target} x={selected.x} y={selected.y} />}
    </div>
  );
}
