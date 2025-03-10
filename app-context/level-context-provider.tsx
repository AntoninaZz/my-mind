import React, { useState } from 'react';
import { AppState, LevelContext, startResult } from './level-context';

interface Props {
    children: React.ReactNode
}

export const LevelContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
    const [state, setState] = useState(startResult);
    const updateState = (newState: Partial<AppState>) => {
        setState({ ...state, ...newState });
    }
    return (
        <LevelContext.Provider value={{ ...state, updateState }}>{props.children}</LevelContext.Provider>
    )
}