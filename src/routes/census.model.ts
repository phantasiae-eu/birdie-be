interface PartialResult {
    [key: string]: string
}
interface Age {
    age: number
}

export type FullResult = PartialResult | Age
