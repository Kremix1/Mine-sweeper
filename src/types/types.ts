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
}

export type Cell = { value: CellValue, state: CellState }

export enum Face {
    smile = 'face_smile',
    scared = 'face_scared',
    cool = 'face_cool',
    dead = 'face_dead',
}