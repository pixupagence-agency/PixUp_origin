"use client";

import React, { useState, useEffect } from "react";

interface PixelGridProps {
    className?: string;
    color?: string;
    size?: number;
    gap?: number;
    rows?: number;
    cols?: number;
    variant?: 'grid' | 'random' | 'diagonal';
}

const PixelGrid: React.FC<PixelGridProps> = ({
    className = "",
    size = 4,
    gap = 2,
    rows = 10,
    cols = 10,
    variant = 'random'
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Return an empty grid or a placeholder during SSR to avoid mismatch
    if (!mounted && variant === 'random') {
        return (
            <div
                className={`grid ${className} invisible`}
                style={{
                    gridTemplateColumns: `repeat(${cols}, ${size}px)`,
                    gap: `${gap}px`,
                    width: 'fit-content'
                }}
            >
                {Array.from({ length: rows * cols }).map((_, i) => (
                    <div
                        key={i}
                        style={{ width: `${size}px`, height: `${size}px` }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={`grid ${className}`}
            style={{
                gridTemplateColumns: `repeat(${cols}, ${size}px)`,
                gap: `${gap}px`,
                width: 'fit-content'
            }}
        >
            {Array.from({ length: rows * cols }).map((_, i) => {
                let opacity = 0;
                if (variant === 'random') {
                    opacity = Math.random() > 0.7 ? Math.random() : 0;
                } else if (variant === 'diagonal') {
                    const r = Math.floor(i / cols);
                    const c = i % cols;
                    opacity = (r + c) % 3 === 0 ? 0.3 : 0;
                } else {
                    opacity = 0.1;
                }

                return (
                    <div
                        key={i}
                        className="bg-current rounded-sm"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity
                        }}
                    />
                );
            })}
        </div>
    );
};

export default PixelGrid;
