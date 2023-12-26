<script>
    import Card from "../components/Card.svelte";
    import Waves from "../components/Waves.svelte";
</script>

<div>
    <section id="main">
        <Waves />
        <div class="relative">
            <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-28 text-secondary text-9xl font-jetbrains">Sarcat</h1>
        </div>
        <div class="bg-primary h-screen flex justify-center items-center">
            <div class="rounded-lg p-10 gradient justify-center items-center flex h-screen w-screen">
                <div class="flex items-center justify-center space-x-6">
                    <a href="#software"><Card title="Software" subtitle="Jan Schlegel" fontSize="text-2xl" icon="BracketIcon"/></a>
                    <a href="#hardware"><Card title="Hardware" subtitle="Emil Becker | Colin Quadflieg" icon="MotherboardIcon"/></a>
                    <Card title="About us" subtitle="" icon="SearchIcon"/>
                </div>
            </div>
        </div>
    </section>
    <section id="software">
        <div class="relative">
            <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-28 text-secondary text-9xl font-jetbrains">Software</h1>
        </div>
        <div class="h-screen bg-primary">

        </div>
    </section>
    <section id="hardware">
        <div class="relative">
            <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-28 text-secondary text-9xl font-jetbrains">Hardware</h1>
        </div>
        <div class="h-screen bg-primary">

        </div>
    </section>

</div>