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

interface IPropRedirect {
    label: string,
    url: string
}

interface IPropImageHome {
    id: string,
    image: string
}

interface IPropLogo {
    heigth: string,
    width: string
}