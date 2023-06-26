type F = (...p: any[]) => any;

export function debounce(fn: F, t: number): F {
  let timeoutId: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), t);
  };
}
