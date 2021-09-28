export {}

declare global {
  interface Window {
    plausible: {
      q: Array<unknown>
      (goal: string): void
    }
  }
}
