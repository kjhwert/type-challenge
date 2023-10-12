type Tuple = readonly unknown[];

type Concat<T extends Tuple, K extends Tuple> = [...T, ...K];

type Result = Concat<[1], [2]> // expected to be [1, 2]
type Result2 = Concat<[1,2,3,4], [1,2,3]>
