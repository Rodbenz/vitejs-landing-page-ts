export const START_LOAD = 'START_LOAD'
export const END_LOAD = 'END_LOAD'


export function startLoadScreen() {
    return {
        type: START_LOAD
    }
}

export function endEndLoadScreen() {
    return {
        type: END_LOAD
    }
}