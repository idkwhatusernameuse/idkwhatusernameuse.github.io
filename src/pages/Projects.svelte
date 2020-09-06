<script>
    import Project from '../components/Project.svelte';
</script>

<style>
    #projects {
        margin-top: 24px;
        margin-bottom: 24px;
        text-align: center;
    }
</style>

<div id="projects">
    <!-- svelte-ignore missing-declaration -->
    <Project title="Podium"
        description="Alles Micro client (WIP)"
        image="images/podium.png"
        textColor="#3D90CD"
        on:click={() => open('https://github.com/idkwuu/Podium')}/>

    <!-- svelte-ignore missing-declaration -->
    <Project title="The A Keyboard"
        description="An Android keyboard full of A keys"
        image="images/theakeyboard.png"
        on:click={() => open('https://play.google.com/store/apps/details?id=dev.idkwuu.akeyboard')}/>
</div>