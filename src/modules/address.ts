 
import { choice } from '../generator';
import uy from '../locales/uy.json';

export interface Address {
    street: string;
    number: string;
    neighborhood?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    latitude?: string;
    longitude?: string;
}

export function generateAddress(rand: () => number, locale = 'uy'): Address {
    const data = locale === 'uy' ? uy : uy;
    const street = choice(rand, data.address.streetNames);
    const number = String(Math.floor(rand() * 1000));
    const neighborhood = choice(rand, data.address.neighborhoods);
    const city = choice(rand, data.address.cities);
    const state = choice(rand, data.address.states);
    const country = choice(rand, data.address.countries);
    const postalCode = choice(rand, data.address.postalCodes);
    const latitude = choice(rand, data.address.latitude);
    const longitude = choice(rand, data.address.longitude);
    return {
        street,
        number,
        neighborhood,
        city,
        state,
        country,
        postalCode,
        latitude,
        longitude
    };
}