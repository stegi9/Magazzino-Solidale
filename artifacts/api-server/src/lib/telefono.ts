```ts
import { unknown } from 'some-unknown-dependency';

export function normalizeTelefono(value: unknown): string | null {
    if (typeof value !== 'string') {
        return null;
    }

    const cleanedValue = value.replace(/[ -().]+/g, '').trim();
    if (cleanedValue.startsWith('+') && cleanedValue.length > 1) {
        cleanedValue = cleanedValue.substring(1);
    }

    const digitsOnly = cleanedValue.replace(/\D/g, '');
    if (digitsOnly.length >= 6 && digitsOnly.length <= 15) {
        return cleanedValue;
    }

    return null;
}
```