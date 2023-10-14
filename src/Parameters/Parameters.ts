const foo = (arg1: string, arg2: number): void => {}

/**
 * 1. infer - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 * 2. distributive conditional type (any ? ~ ) https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 */
type MyParameters<Fn extends (...args: any) => any> = Fn extends (...args: infer T) => any ? T : never

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
