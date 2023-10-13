type Push<Arr extends unknown[], T> = [...Arr, T];

type PushResult = Push<[1, 2], '3'>

type Unshift<Arr extends unknown[], T> = [T, ...Arr];

type UnshiftResult = Unshift<[1, 2], 0>
