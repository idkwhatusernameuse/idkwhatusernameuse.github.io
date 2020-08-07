<script>
    export let text;
</script>

<style>
    .button {
        margin: 0px 8px;
        display: inline-block;
        border-radius: 50px;
        padding: 0px 16px;
        border: 1px solid white;
        transition-duration: 500ms;
        background: rgba(0,0,0,0.3);
    }

    .button:hover {
        cursor: pointer;
        transition-duration: 500ms;
        background: rgba(0,0,0,0.9);
    }
</style>

<div class="button shadow" on:click>
    <p>{text}</p>
</div>