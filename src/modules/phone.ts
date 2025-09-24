import { choice } from "../generator";
import uy from "../locales/uy.json";

export interface Phone {
    phone: string;
}

export function generatePhone(rand: () => number, locale = "uy"): Phone {
    const data = locale === "uy" ? uy : uy;
    const phone = choice(rand, data.phone.phoneNumbers);
    return {
        phone
    };
}
