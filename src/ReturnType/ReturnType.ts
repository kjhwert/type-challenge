const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any;

type a = MyReturnType<typeof fn>
