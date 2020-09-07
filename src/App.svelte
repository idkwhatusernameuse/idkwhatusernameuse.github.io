<script>
  import Profile from "./components/Profile.svelte";
  import Button from "./components/Button.svelte";

  import Projects from "./pages/Projects.svelte";
  import Links from './pages/Links.svelte';

  let projectsDisplay = "none";
  let linksDisplay = "none";

  function openProfileContainer() {
    linksDisplay = "none";
	  projectsDisplay = projectsDisplay == "none" ? "inline-grid" : "none";
  }

  function openLinksContainer() {
    projectsDisplay = "none";
	  linksDisplay = linksDisplay == "none" ? "inline-grid" : "none";
  }
</script>

<style>
  #main {
    margin-top: 30px;
    display: grid;
    align-content: center;
  }

  #buttons {
    display: flex;
    justify-content: center;
  }
</style>

<div id="main">
  <Profile />
  <div id="buttons">
    <Button text="Personal projects" on:click={openProfileContainer} />
    <Button text="Links" on:click={openLinksContainer} />
  </div>

  <div style="display: {projectsDisplay};">
    <Projects />
  </div>

  <div style="display: {linksDisplay};">
    <Links />
  </div>
  
</div>