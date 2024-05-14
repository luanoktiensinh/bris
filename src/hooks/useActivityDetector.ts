import {useCallback, useEffect, useState} from "react";

const DEFAULT_ACTIVITY_EVENTS = [
    'click',
    'mousemove',
    'keydown',
    'wheel',
    'mousewheel',
    'mousedown',
    'touchstart',
    'touchmove',
    'focus',
];
export const useActivityDetector = () => {
    const [ active, setActive ] = useState(false);
    const onDetected = useCallback(() => {
        setActive(true);
        removeEvents();
    }, []);
    const addEvents = useCallback(() => {
        DEFAULT_ACTIVITY_EVENTS.forEach(eventName => {
            window.addEventListener(eventName, onDetected);
        });
    }, [onDetected]);
    const removeEvents = useCallback(() => {
        DEFAULT_ACTIVITY_EVENTS.forEach(eventName => {
            window.removeEventListener(eventName, onDetected);
        });
    }, [onDetected]);
    useEffect(() => {
        addEvents();
        return () => {
            removeEvents();
        };
    }, [addEvents, removeEvents]);
    return active;
};