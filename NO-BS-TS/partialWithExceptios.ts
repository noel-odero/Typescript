// Task: Create a mapped type PartialWithExceptions<T, K> such that all properties in T are optional except those in union K, which stay required

type PartialWithExceptions<T, K extends keyof T> =
Partial<Omit<T, K>> & Pick<T, K>;
