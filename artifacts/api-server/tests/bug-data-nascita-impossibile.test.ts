/**
 * Test dimostrativi dei due ticket aperti in piattaforma.
 *
 * Vanno copiati nel repository bersaglio in:
 *   artifacts/api-server/tests/bug-data-nascita-impossibile.test.ts
 *
 * Sono scritti PRIMA della correzione, quindi sul codice attuale falliscono:
 * è esattamente ciò che serve per mostrare che la piattaforma sa dire quali
 * test non sono passati, e perché.
 *
 * Il terzo caso passa già: serve a mostrare che il pannello distingue i test
 * superati da quelli falliti dentro lo stesso file.
 */
import { describe, expect, it } from "vitest";
import { hasFutureBirthDate, isSupportedLogoType } from "../src/lib/bug5Validation";

describe("Ticket bug — date di nascita sintatticamente valide ma inesistenti", () => {
  const oggi = new Date(2026, 6, 16, 12);

  it("rifiuta una data con mese fuori intervallo (2025-13-45)", () => {
    // La funzione controlla solo il formato, quindi 2025-13-45 supera il
    // controllo e viene trattata come data di nascita valida.
    expect(hasFutureBirthDate("2025-13-45", oggi)).toBe(true);
  });

  it("rifiuta il 30 febbraio, che nel calendario non esiste", () => {
    expect(hasFutureBirthDate("2025-02-30", oggi)).toBe(true);
  });

  it("continua ad accettare una data passata valida", () => {
    // Caso di non regressione: questo passa già oggi.
    expect(hasFutureBirthDate("1990-05-12", oggi)).toBe(false);
  });
});

describe("Ticket change request — tipo MIME del logo senza distinzione di maiuscole", () => {
  it("accetta IMAGE/PNG scritto in maiuscolo", () => {
    // Lo standard vuole il confronto insensibile alle maiuscole: oggi non lo è.
    expect(isSupportedLogoType("IMAGE/PNG")).toBe(true);
  });

  it("tollera gli spazi ai bordi del valore ricevuto", () => {
    expect(isSupportedLogoType("  image/webp  ")).toBe(true);
  });
});
