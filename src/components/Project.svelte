<script>
    export let title;
    export let description;
    export let image;
    export let textColor = "black";
</script>

<style>
    .project {
        display: inline-grid;
        background: white;
        border-radius: 20px;
        padding-bottom: 8px;
        margin: 8px;
        text-align: start;
        cursor: pointer;
    }

    .project-text {
        margin: 12px 16px 12px 16px;
    }

    h2, p {
        margin: 0px;
        text-shadow: 0px 0px 0px transparent;
    }

    img {
        border-radius: 17px;
        height: 200px;
    }
</style>

<div class="project shadow" on:click>
    <img src={image} alt={title}/>
    <div class="project-text">
        <h2 style="color: {textColor};">{title}</h2>
        <p style="color: {textColor};">{description}</p>
    </div>
</div>