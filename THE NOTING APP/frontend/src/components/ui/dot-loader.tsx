import React, { useCallback, useEffect, useRef } from "react";
import type { ComponentProps } from "react";

// Utility for className merging (if you don't have a cn utility)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

type DotLoaderProps = {
    frames: number[][];
    dotClassName?: string;
    isPlaying?: boolean;
    duration?: number;
    repeatCount?: number;
    onComplete?: () => void;
} & ComponentProps<"div">;

export const DotLoader = ({
    frames,
    isPlaying = true,
    duration = 100,
    dotClassName,
    className,
    repeatCount = -1,
    onComplete,
    ...props
}: DotLoaderProps) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const currentIndex = useRef(0);
    const repeats = useRef(0);
    const interval = useRef<NodeJS.Timeout | null>(null);

    const applyFrameToDots = useCallback(
        (dots: HTMLDivElement[], frameIndex: number) => {
            const frame = frames[frameIndex];
            if (!frame) return;

            dots.forEach((dot, index) => {
                dot.classList.toggle("active", frame.includes(index));
            });
        },
        [frames],
    );

    useEffect(() => {
        currentIndex.current = 0;
        repeats.current = 0;
    }, [frames]);

    useEffect(() => {
        if (isPlaying) {
            if (currentIndex.current >= frames.length) {
                currentIndex.current = 0;
            }
            const dotElements = gridRef.current?.children;
            if (!dotElements) return;
            const dots = Array.from(dotElements) as HTMLDivElement[];
            interval.current = setInterval(() => {
                applyFrameToDots(dots, currentIndex.current);
                if (currentIndex.current + 1 >= frames.length) {
                    if (repeatCount != -1 && repeats.current + 1 >= repeatCount) {
                        if (interval.current) clearInterval(interval.current);
                        onComplete?.();
                    }
                    repeats.current++;
                }
                currentIndex.current = (currentIndex.current + 1) % frames.length;
            }, duration);
        } else {
            if (interval.current) clearInterval(interval.current);
        }

        return () => {
            if (interval.current) clearInterval(interval.current);
        };
    }, [frames, isPlaying, applyFrameToDots, duration, repeatCount, onComplete]);

    return (
        <div {...props} ref={gridRef} className={cn("grid w-fit grid-cols-7 gap-0.5", className)}>
            {Array.from({ length: 49 }).map((_, i) => (
                <div key={i} className={cn("h-1.5 w-1.5 rounded-sm", dotClassName)} />
            ))}
        </div>
    );
}; 