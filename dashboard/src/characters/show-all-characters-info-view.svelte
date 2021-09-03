<script lang="typescript">
    import CharactersList from './list.svelte'
    import { fetchCharacters } from '../api/fetch-characters'

    let promise = fetchCharacters()
</script>

<div>
    {#await promise}
	    <p>...waiting</p>
    {:then characters}
        <CharactersList {characters}/>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
