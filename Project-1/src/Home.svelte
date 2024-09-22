<script>
    import Carousel from './lib/Carousel.svelte';
    // @ts-ignore
    import Heading from './lib/Header.svelte';

    import "carbon-components-svelte/css/all.css";
    let theme = "g90"; // "white" | "g10" | "g80" | "g90" | "g100"
   // @ts-ignore
     $: document.documentElement.setAttribute("theme", theme);


    import '@splidejs/svelte-splide/css';
</script>

<!-- This main is going to have infinite scroll attached to it -->
<main>
    <div id="Header" class="header">
        <Heading />
    </div>
    <div id="BookList">
        <!-- These are going to be same component with different items in them -->
        <!-- Probably trying to use this image carousel -->
        <!-- https://splidejs.com/tutorials/image-carousel/ -->
         <!-- When we click we are going to navigate to the book clicked -->
        <div id="Books Reading">
            <Carousel title="Currently Reading"/>
        </div>
        <div id="Books Planned">
            <Carousel title="Planning to Read"/>
        </div>
            
        <div id="Books Read">
            <Carousel title="Finished Reading"/>
        </div>
    </div>
    <div id="BookGraph">

    </div>
</main>

<style>
    .header {
        text-align: center;
        padding-bottom: 1rem;
    }
</style>