import * as requestContext from 'request-context';

export class ContextProvider {
    // tslint:disable-next-line:variable-name
    private static readonly _nameSpace = 'request';

    static get<T>(key: string): T {
        return requestContext.get(ContextProvider._getKeyWithNamespace(key));
    }

    static set(key: string, value: any): void {
        requestContext.set(ContextProvider._getKeyWithNamespace(key), value);
    }

    private static _getKeyWithNamespace(key: string): string {
        return `${ContextProvider._nameSpace}.${key}`;
    }
}
