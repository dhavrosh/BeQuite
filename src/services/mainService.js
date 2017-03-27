export function generateUUID() {
  let d = new Date().getTime();

  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now();
  }

  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

  return uuid;
}

export function LimitProp(value, isRequired) {
  this.value = value;
  this.isRequired = isRequired;
}

export function fromDecibels(value, correction = 0) {
  return (20 * Math.log10(value) + correction);
}

export function range(start, end, increment) {
  const foo = [];

  for (let i = start; i <= end; i += increment) {
    foo.push(i);
  }

  return foo;
}