

import type { Name } from 'src/characters/character';
import api from './index';

const url = `characters`

export async function fetchCharacters(): Promise<Name[]> {

    try {
        const response = await api.useFetch(url, { method: 'GET' })

        if(!response.ok) {
            throw new Error('Not Ok')
        }

        const result = await response.json()

        return result
    } catch (e: any) {
        throw e;
    }
}
