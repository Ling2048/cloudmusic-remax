type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type reducers = import('../store/redux/reducers').reducers;
type actions = import('../store/redux/actions').actions;

type Reducers = {
  [K in keyof reducers]:
  ReturnType<reducers[K]>
}

type Actions = {
  [K in keyof actions]:
  {
    [Y in keyof actions[K]]:
    UnsafeReturnType<actions[K][Y]>
  }
}