export interface ForecastArea {
    centers:  { [key: string]: Center };
    offices:  { [key: string]: Center };
    class10s: { [key: string]: Center };
    class15s: { [key: string]: Center };
    class20s: { [key: string]: Center };
}

export interface Center {
    name:        string;
    enName:      string;
    officeName?: string;
    children?:   string[];
    parent?:     string;
    kana?:       string;
}
