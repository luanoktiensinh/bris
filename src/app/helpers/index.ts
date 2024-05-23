const BASE_DEFAULT = "http://localhost";
export const useHelpers = () => {
    const numBetween = (value: number, min: number = -Infinity, max: number = Infinity) => (
        Math.min(max, Math.max(min, value))
    );
    const generateUniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };
		const resolveLink = (link: string | undefined, base?: string) => {
			base = base || process.env.BE_URL;
			const urlBase = new URL(base || BASE_DEFAULT);
			const urlTarget = new URL(link || '', base || BASE_DEFAULT);
			if(!base) return link || '';
			if(urlBase.host === urlTarget.host) {
				return urlTarget.pathname;
			}
			return urlTarget.href;
		};
    return {
        numBetween,
        generateUniqueId,
				resolveLink
    };
};