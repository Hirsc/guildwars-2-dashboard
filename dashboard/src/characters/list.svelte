<script lang="typescript">
    import ShowCharacterInfo from './single-character-info.svelte'
    import { fetchCharacter } from '../api/fetch-character'

    export let characters;
</script>

<ul>
    {#each characters as char }
        <li>
            <ShowCharacterInfo name={char} {fetchCharacter} />
        </li>
    {/each}
</ul>
