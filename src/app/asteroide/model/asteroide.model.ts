export interface asteroidsList {
    links: asteroidsLinks,
    near_earth_objects: {[key: string]: asteroid[]}
}

export interface asteroidsLinks {
    next?: string;
    prev?: string;
    self: string;
}

export interface asteroid {
    links: asteroidsLinks,
    id: number,
    neo_reference_id: number,
    name: string,
    nasa_jpl_url: string,
    estimated_diameter: {
        kilometers: metricsDiameter,
        meters: metricsDiameter,
        miles: metricsDiameter,
        feet: metricsDiameter
    },
    is_potentially_hazardous_asteroid: boolean,
    close_approach_data: ApproachData[],
    is_sentry_object: boolean
}

export interface metricsDiameter {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}


export interface ApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: string;
    relative_velocity: {
        kilometers_per_second: number,
        kilometers_per_hour: number,
        miles_per_hour: number,
    },
    miss_distance: {
        astronomical: number,
        lunar: number,
        kilometers: number,
        miles: number
    },
    orbiting_body: string
}