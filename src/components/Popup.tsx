'use client';

import React from "react";
import { PopupTarget } from "@/types";

interface PopupProps {
  target: PopupTarget;
  x: number;
  y: number;
}

export default function Popup({ target, x, y }: PopupProps) {
  return (
    <div
      className="absolute bg-[#1b1b1b] text-white p-3 rounded shadow-lg z-20 max-w-xs cursor-pointer"
      style={{ left: x, top: y }}
    >
      <div className="font-bold">{target.data.name}</div>
      {target.type === "problem" && (
        <div className="text-sm italic">{target.data.status}</div>
      )}
      <div className="mt-2 text-sm text-gray-300">
        {target.data.notes || "No notes."}
      </div>
    </div>
  );
}
