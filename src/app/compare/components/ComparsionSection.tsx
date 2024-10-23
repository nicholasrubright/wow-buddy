"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ComparsionSectionProps {
  title: string;
  mainContent: React.ReactNode;
  details: React.ReactNode;
}

export function ComparisonSection({
  title,
  mainContent,
  details,
}: ComparsionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="rounded-lg bg-white shadow">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            {isExpanded ? (
              <>
                Hide Details
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                Show Details
                <ChevronDown className="h-5 w-5" />
              </>
            )}
          </button>
        </div>

        {/* Main Chart/Content Area */}
        <div className="mt-4">{mainContent}</div>

        {/* Expandable Details Panel */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="rounded-lg bg-gray-50 p-4">{details}</div>
        </div>
      </div>
    </section>
  );
}
