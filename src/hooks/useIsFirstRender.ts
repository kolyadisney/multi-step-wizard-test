import { useRef, useEffect } from 'react';

export const useIsFirstRender = () => {
    const isFirst = useRef(true);

    useEffect(() => {
        isFirst.current = false;
    }, []);

    return isFirst.current;
};
