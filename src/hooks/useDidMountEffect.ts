import {DependencyList, useEffect, useRef} from "react";

export const useDidMountEffect = (func: Function, deps: DependencyList) => {
	const hasPageBeenRendered = useRef(false);
	useEffect(() => {
		if(!hasPageBeenRendered.current) {
			hasPageBeenRendered.current = true;
			return;
		}
		func();
		// eslint-disable-next-line
	}, deps);
};