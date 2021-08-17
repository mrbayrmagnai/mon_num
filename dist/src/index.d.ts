export interface MonNumOptions {
    latin?: boolean;
    suffix?: 'iin' | 'dahi' | 'dugaar' | 'n';
    ucFirst?: boolean;
    upperCase?: boolean;
}
export declare const toWords: (num: number, options?: MonNumOptions | undefined) => string;
