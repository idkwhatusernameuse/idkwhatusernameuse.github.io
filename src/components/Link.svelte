<script>
    export let title;
    export let src;
    export let link;
</script>

<style>
    .link {
        text-decoration: none;
        color: white;
        display: inline-flex;
        margin: 8px;
        border: 1px solid white;
        border-radius: 50px;
        padding: 0px 16px;
        text-shadow: 0px 0px 0px transparent;
        cursor: pointer;
        transition-duration: 500ms;
        background: rgba(0,0,0,0.3);
    }

    .link:hover {
        transition-duration: 500ms;
        background: rgba(0,0,0,0.9);
    }

    img {
        align-self: center;
        height: 30px;
        padding-right: 8px;
    }
</style>

<a target="_blank" href={link}>
    <div class="link shadow">
        <img {src} alt={title}/>
        <p>{title}</p>
    </div>
</a>