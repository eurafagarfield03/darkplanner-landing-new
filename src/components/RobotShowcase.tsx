'use client'

import { SplineScene } from "@/components/ui/spline";

export function RobotShowcase() {
  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
