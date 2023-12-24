<script>
    import { fade } from 'svelte/transition';

    // Import icons dynamically based on the provided icon name
    import MotherboardIcon from "./MotherboardIcon.svelte";
    import SomeOtherIcon from "./BracketIcon.svelte";
    import SearchIcon from "./SearchIcon.svelte";
    import BracketIcon from "./BracketIcon.svelte";

    export let title;
    export let subtitle;
    export let fontSize;
    export let icon; // New prop for specifying the icon

    let showIcon = false;
    let iconHeight = "24px";
    let iconWidth = "24px";

    if (typeof fontSize === 'undefined') fontSize = "text-xl";
</script>

<div
        tabindex="0"
        role="button"
        class="h-72 w-96 rounded-2xl border-2 border-secondary transition-all duration-300 ease-in shadow-custom hover:shadow-purple-500 hover:-translate-y-2.5 group cursor-pointer flex justify-center items-center flex-col gap-4"
        on:mouseover={() => showIcon = true}
        on:mouseout={() => showIcon = false}
        on:focus={() => showIcon = true}
        on:blur={() => showIcon = false}
>
    <h1 class="text-center text-5xl text-secondary font-rubik p-4">{title}</h1>
    <p class="text-center text-transparent {fontSize} font-jetbrains p-4 group-hover:text-gray-700 transition-all duration-300">{subtitle}</p>
    <div style="height: {iconHeight}; width: {iconWidth};" class="flex items-center justify-center">
        {#if showIcon}
            <div transition:fade={{ duration: 300 }}>
                {#if icon === 'MotherboardIcon'}
                    <MotherboardIcon class="h-6 w-6"/>
                {:else if icon === 'BracketIcon'}
                    <BracketIcon class="h-6 w-6"/>
                {:else if icon === 'SearchIcon'}
                    <SearchIcon class="h-6 w-6"/>
                {/if}
            </div>
        {/if}
    </div>
</div>
