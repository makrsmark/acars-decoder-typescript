import { Airport } from "./airport";
import { Route } from "./route";

/**
 */
export interface FlightPlan {
    // planned, inactive, alternate
    status: string; 
    
    departure?: Airport;

    arrival?: Airport;

    routes?: Route[];

}