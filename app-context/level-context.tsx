import React from 'react';

export interface GameResult {
    win?: boolean
    lose?: boolean
}

export const startResult: GameResult = {
    win: false,
    lose: false,
}

export interface AppState {
    gameResult?: {
        win?: boolean
        lose?: boolean
    }
    updateState: (newState: Partial<AppState>) => void
}

const defaultState: AppState = {
    gameResult: startResult,
    updateState: (newState?: Partial<AppState>) => { },
}

export const LevelContext = React.createContext<AppState>(defaultState);
export const AppConsumer = LevelContext.Consumer;