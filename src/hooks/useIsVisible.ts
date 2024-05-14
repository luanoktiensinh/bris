import { RefObject, useEffect, useState} from "react";

interface Props {
    ref: RefObject<HTMLDivElement>,
    renderOnce?: boolean
}
export const useIsVisible = ({ref, renderOnce}: Props) => {
    const [isIntersecting, setIntersecting] = useState(typeof IntersectionObserver === 'undefined');
    useEffect(() => {
        const target = ref.current;
        if(!target) return;
        let observer: IntersectionObserver | null = null;
        if(typeof IntersectionObserver !== 'undefined') {
            observer = new IntersectionObserver((entries) => {
                const isIntersecting =
                    entries.some(entry => entry.isIntersecting);
                setIntersecting(isIntersecting);

                // Stop observing if already rendered once
                if(isIntersecting && renderOnce) {
                    observer?.unobserve(target);
                }
            });
            observer.observe(target);
        }
        return () => {
            observer && observer.disconnect();
        };
    }, [ref, renderOnce]);

    return isIntersecting;
};