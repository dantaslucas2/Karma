/// <reference types="react-scripts" />

interface IPropSection {
    title: string
    cards: IPropCard[]
}

interface IPropCard {
    title: string,
    description: string
    creationDate: Date
}

interface IPropButton {
    label: string,
    url: string
}