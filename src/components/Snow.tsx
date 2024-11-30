import { useEffect, useState } from "react";

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );
      setDocumentHeight(height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    setSnowflakes(Array.from({ length: 500 }, (_, i) => i + 1));
  }, []);

  return (
    <div className="absolute inset-0 h-full">
      <div className="snow pointer-events-none absolute inset-0">
        {snowflakes.map((i) => (
          <div
            key={i}
            className="snowflake absolute rounded-full bg-white"
            style={
              {
                "--size": `min(40px,${Math.random() * 1}vw)`,
                "--left-ini": `${Math.random() * 20 - 10}vw`,
                "--left-end": `${Math.random() * 20 - 10}vw`,
                "--doc-height": `${documentHeight}px`,
                width: "var(--size)",
                height: "var(--size)",
                left: `${Math.random() * 100}vw`,
                animation: `snowfall ${40 + Math.random() * 40}s linear infinite`,
                animationDelay: `-${Math.random() * 50}s`,
                filter: `blur(${i % 8}px)`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translate3d(var(--left-ini), 0, 0);
          }
          100% {
            transform: translate3d(var(--left-end), var(--doc-height), 0);
          }
        }
      `}</style>
    </div>
  );
}
