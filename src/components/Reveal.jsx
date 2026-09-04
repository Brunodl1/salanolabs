import useReveal from "../hooks/useReveal";

/**
 * Wraps children in a scroll-reveal animation.
 * `delay` staggers items in a list: delay={index * 80}
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal({ delay });

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
