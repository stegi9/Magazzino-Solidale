import { trim, toUpperCase } from 'lodash';

/**
 * Funzione per la validazione formale del codice fiscale.
 * @param value - Valore da validare.
 * @returns true se il codice fiscale è valido, false altrimenti.
 */
export function isValidCodiceFiscale(value: unknown): boolean {
    if (typeof value !== 'string' || value.trim().length !== 16) {
        return false;
    }
    const formattedValue = toUpperCase(trim(value));
    const regex = /^[A-Z]{6}[0-9]{2}[A-Z0-9]{1}[0-9]{2}[A-Z0-9]{1}[0-9]{3}[A-Z]{1}$/;
    return regex.test(formattedValue);
}

// Esempi di utilizzo:
// isValidCodiceFiscale('RSSMRA85M01H501Z'); // true
// isValidCodiceFiscale('rssmra85m01h501z'); // true
// isValidCodiceFiscale('RSSMRA85M01H501'); // false
// isValidCodiceFiscale(''); // false
// isValidCodiceFiscale(null); // false
// isValidCodiceFiscale(123); // false

export default isValidCodiceFiscale;
