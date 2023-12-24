<script>
    import Card from "../components/Card.svelte";
    import Waves from "../components/Waves.svelte";
</script>

<div class="bg-primary h-screen flex justify-center items-center">
    <Waves />
    <div class="rounded-lg p-10 gradient justify-center items-center flex h-screen w-screen">
        <div class="flex items-center justify-center space-x-6">
            <Card title="Software" subtitle="Jan Schlegel" fontSize="text-2xl" icon="BracketIcon"/>
            <Card title="Hardware" subtitle="Emil Becker | Colin Quadflieg" icon="MotherboardIcon"/>
            <Card title="About us" subtitle="" icon="SearchIcon"/>
        </div>
    </div>
</div>
