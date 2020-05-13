declare module 'facts-generator' {
  type Fact = {
    fact: string;
    category: string;
  }

  export function getFact(): Fact;
  export function getRandomFact(): string;
}
