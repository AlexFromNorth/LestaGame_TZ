export interface Vehicles {
    title: string;
    description: string;
    icons: {
        medium: string;
    };
    level: number;
    type: {
        title: string;
        icons: {
            default: string;
        };
    };
    nation: {
        title: string;
        color: string;
        icons: {
            small: string;
        };
    };
}
