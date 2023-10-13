type Push<Arr extends unknown[], T> = [...Arr, T];

type Result = Push<[1, 2], '3'>
