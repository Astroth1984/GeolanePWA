export interface Color {
    label: string,
    value: string
}


export class Passe {
    id !: number | null;
    title!: string;
    url!: string;
    haut!: number | null;
    bas!: number | null;
    gauche!: number | null;
    droit!: number | null;
    colors!: Color[];
    rectangle!: boolean;
    ovale!: boolean;
}

