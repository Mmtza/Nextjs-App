"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedComponents() {
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Book", "Store"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 500,
      startDelay: 0,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return <span ref={el} />;
}
