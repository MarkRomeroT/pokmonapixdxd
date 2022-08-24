const API_HOST  = 'https://pokeapi.co/api/v2';

export async function getPokemonsApi(endPointUrl){
    try {
        const url =  `${API_HOST}/pokemon?limit=24&offset=0`;
        const response = await fetch(endPointUrl || url);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url) {

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}

export async function getPokemonDetailsById(id) {

    try {
        const url =  `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}