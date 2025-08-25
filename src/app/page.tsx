import React from "react";
import ContestGrid from "@/components/ProblemGrid";

export default function Home() {
  return (
    <div className="p-4">
      <div className="mb-10">
        <h1 className="text-4xl py-4">Problems</h1>
        <p>The most important part of competitive programming is upsolving.</p>
        <p>The most difficult part of competitive programming is also upsolving.</p>
        <p>If I cannot solve a problem, I have more to learn.</p>
      </div>
      <ContestGrid />
    </div>
  );
}
