<script lang=typescript>
    export let fetchCharacter
    export let name
        
    let promise = fetchCharacter(name)
</script>

<div>
    {#await promise}
        <p>...waiting</p>
    {:then char}
        <ul>
            <li>{char.name}</li>
            <li>{char.race}</li>
            <li>{char.gender}</li>
            <li>{char.deaths}</li>
            <ul>
                {#each char.crafting as craftJob }
                    <li>
                        <span>{craftJob.discipline} {craftJob.rating} {craftJob.active}</span>
                    </li>
                {/each}
            </ul>
        </ul>
    
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

