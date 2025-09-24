import { describe, it, expect } from "vitest"
import { createGenerator } from "../src"

describe("Person generator", () => {
  it("generates a reproducible person with seed", () => {
    const gen1 = createGenerator({ seed: globalThis.SEED })
    const gen2 = createGenerator({ seed: globalThis.SEED })

    expect(gen1.person()).toEqual(gen2.person())
  })
})