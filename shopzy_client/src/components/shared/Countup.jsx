import { useEffect, useState } from "react";

export default function Countup({ children, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const target = parseInt(children);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * target));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
}
