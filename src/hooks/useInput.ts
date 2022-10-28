import { ChangeEvent, useCallback, useState } from 'react';

type UseInputType = [string, (e: ChangeEvent<HTMLInputElement>) => void];

export function useInput(): UseInputType {
    const [inputValue, setInputValue] = useState<string>('');

    const handling = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    return [inputValue, handling];
}