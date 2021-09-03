<script lang="typescript">
    import ShowCharacterInfo from './single-character-info.svelte'
    import { fetchCharacter } from '../api/fetch-character'
    import type { Name } from './character';

    export let characters: Name[];
</script>

<ul>
    {#each characters as char }
        <li>
            <ShowCharacterInfo name={char} {fetchCharacter} />
        </li>
    {/each}
</ul>
