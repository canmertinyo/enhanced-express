import 'reflect-metadata';

const INJECT_TOKEN = 'inject:tokens';

export function Inject(token: string): any {
  return function (target: any, key: string | symbol, index: number) {
    const injectTokens: Record<number, string> =
      Reflect.getMetadata(INJECT_TOKEN, target, key) || {};
    injectTokens[index] = token;
    Reflect.defineMetadata(INJECT_TOKEN, injectTokens, target, key);
  };
}
