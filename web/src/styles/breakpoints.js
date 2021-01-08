const breakpoints = [512, 768, 1024, 1280, 1520];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
export const maxq = breakpoints.map((bp) => `@media (max-width: ${bp + 1}px)`);
