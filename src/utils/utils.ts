export const email = (value: string) =>
  value && value.trim().length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid Email address"
    : undefined;