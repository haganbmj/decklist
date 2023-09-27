export type Input = {
    firstName: string,
    lastName: string,
    eventName: string,
    eventLocation: string,
    eventDate: string,
    deckName: string,
    deckDesigner: string,
    decklist: string,
    sideboard: string,
}

// export enum Game {
//     MagicTheGathering = "Magic: The Gathering",
//     Lorcana = "Lorcana",
// }

// export enum Style {
//     WizardsOfTheCoast = "Wizards of the Coast",
// }

// export enum Sorting {
//     Unsorted = "Unsorted",
//     Alphabetical = "Alphabetical",
// }

// export type Config = {
//     game: Game,
//     style: Style,
//     sorting: Sorting,
// }

export type Config = {
    game: string,
    style: string,
    sorting: string,
}

export class Card {
    constructor(
        public name: string,
        public quantity: number,
    ) {}
}
