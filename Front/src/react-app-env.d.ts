/// <reference types="react-scripts" />

interface IPropSection {
    title: string
    cards: IPropCard[]
}

interface IPropCard {
    title: string,
    description: string
}

interface IPropButton {
    label: string,
    url: string
}