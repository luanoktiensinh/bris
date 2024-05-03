type PropUpdate<T extends object> = {
    [K in keyof T]: { type: K; props: T[K] }
  }[keyof T];
type Money = {
    currency: string,
    value: number
}
