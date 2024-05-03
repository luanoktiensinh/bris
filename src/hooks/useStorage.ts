
export const useStorage = () => {
    const getKey = (key: string) => 'niteco-' + key;
    const set = (key: string, payload: any) => {
        if(typeof payload !== 'string')
            payload = JSON.stringify(payload);
        localStorage.setItem(getKey(key), payload);
    };
    const get = (key: string) => {
        return localStorage.getItem(getKey(key));
    };
    const remove = (key: string) => {
        return localStorage.removeItem(getKey(key));
    };
    return {
        get, set, remove
    };
};