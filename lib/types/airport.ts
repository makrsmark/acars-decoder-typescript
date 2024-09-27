export interface Airport {
    /**
     * ICAO code of the airport
     */
name: string;

/**
 * Runway in format XXY where XX is the runway number (00-35) and Y is L, C, R, or O for Left, Center, Right, or Only
 */
runway: string;
}