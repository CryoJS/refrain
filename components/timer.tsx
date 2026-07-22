"use client"

import { useEffect, useState, useCallback } from "react"
import {
    Label,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    ChartContainer,
    type ChartConfig,
} from "@/components/ui/chart"

import { Button } from "@/components/ui/button"

const chartConfig = {
    secondsLeft: {
        label: "Seconds Left",
    },
    safari: {
        label: "Safari",
        color: "var(--color-primary)",
    },
} satisfies ChartConfig

// Timer Sizes
const timer = {
    innerRadius: 170,
    outerRadius: 200,
};

// TEMP - time to count down
const TOTAL_SECONDS = 20

function formatTime(totalSeconds: number) {
    const m = Math.floor(totalSeconds / 60)
    const s = totalSeconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
}

export default function Timer() {
    const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
        if (!isRunning) return
        if (secondsLeft <= 0) return

        const id = setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)

        return () => clearInterval(id)
    }, [isRunning, secondsLeft])

    const reset = useCallback(() => {
        setSecondsLeft(TOTAL_SECONDS)
        setIsRunning(true)
    }, [])

    const chartData = [
        {
            browser: "safari",
            secondsLeft,
            fill: "var(--color-safari)",
        },
    ]

    return (
        <div className={"w-dvw"}>
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[400px]"
            >
                <RadialBarChart
                    data={chartData}
                    startAngle={-90}
                    endAngle={270}
                    outerRadius={timer.outerRadius}
                    innerRadius={timer.innerRadius}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, TOTAL_SECONDS]}
                        dataKey="secondsLeft"
                        tick={false}
                        axisLine={false}
                    />
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-muted last:fill-background"
                        polarRadius={[timer.outerRadius, timer.innerRadius]}
                    />
                    <RadialBar
                        dataKey="secondsLeft"
                        background
                        cornerRadius={10}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-4xl font-bold"
                                            >
                                                {formatTime(secondsLeft)}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Seconds Left
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                </RadialBarChart>
            </ChartContainer>

            <div className="flex justify-center gap-2 mt-4">
                <Button
                    onClick={() => setIsRunning((r) => !r)}
                    className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                >
                    {isRunning ? "Pause" : "Resume"}
                </Button>
                <Button
                    onClick={reset}
                    className="px-4 py-2 rounded-md border"
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}