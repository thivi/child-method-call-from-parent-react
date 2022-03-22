import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

interface ChildPropType {
    toggle: (callback: () => void) => void;
    trigger: boolean;
}
export const Child = (props: ChildPropType): ReactElement => {
    const [printHelloWorld, setPrintHelloWorld] = useState<boolean>(false);
    const [printHelloUniverse, setPrintHelloUniverse] = useState<boolean>(false);

    const isInit = useRef(true);

    const { toggle, trigger } = props;

    const toggleHelloWorld = useCallback((): void => {
        setPrintHelloWorld((p) => !p);
    }, []);

    const toggleHelloUniverse = useCallback((): void => {
        setPrintHelloUniverse(p => !p);
    }, []);

    useEffect(() => {
        if (isInit.current) {
            isInit.current = false;

            return;
        }

        toggleHelloUniverse()
    }, [ trigger, toggleHelloUniverse ]);

    useEffect(() => {
        toggle && toggle(toggleHelloWorld);
    }, [toggle, toggleHelloWorld]);

    return (
        <div>
            <h1>{printHelloWorld ? "Hello World" : "Goodbye World"}</h1>
            <h1>{printHelloUniverse ? "Hello Universe" : "Goodbye Universe"}</h1>
        </div>
    );
};
