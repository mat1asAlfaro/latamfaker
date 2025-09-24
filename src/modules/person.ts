import { choice } from "../generator";
import uy from "../locales/uy.json";

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

export function generatePerson(rand: () => number, locale = "ar"): Person {
  const data = locale === "uy" ? uy : uy; // más adelante locales dinámicos
  const first = choice(rand, data.person.firstNames);
  const last = choice(rand, data.person.lastNames);
  return {
    firstName: first,
    lastName: last,
    email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`
  };
}
