import { mulberry32 } from "./generator";
import { generatePerson, generateAddress, generatePhone } from "./modules";

export function createGenerator({ seed = Date.now(), locale = "ar" } = {}) {
  const rand = mulberry32(seed);

  return {
    person: () => generatePerson(rand, locale),
    address: () => generateAddress(rand, locale),
    phone: () => generatePhone(rand, locale),
  }
}
