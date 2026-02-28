"use client";

import { forwardRef } from "react";

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SlideWrapper = forwardRef<HTMLElement, SlideWrapperProps>(
  ({ children, className = "", id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`relative h-screen w-screen overflow-hidden ${className}`}
      >
        {children}
      </section>
    );
  }
);

SlideWrapper.displayName = "SlideWrapper";

export default SlideWrapper;
