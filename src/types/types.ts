export enum CellValue {
    none,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    bomb,
}

export enum CellState {
    open,
    visible,
    flagged,
    question,
}

export type Cell = { value: CellValue, state: CellState, exploded?: boolean}

export enum Face {
    smile = 'face_smile',
    scared = 'face_scared',
    cool = 'face_cool',
    dead = 'face_dead',
}