<script>
    import Carousel from './lib/Carousel.svelte';
    // @ts-ignore
    import Heading from './lib/Header.svelte';
    import currentReadingList from './assets/currentlyReading.json';

    import "carbon-components-svelte/css/all.css";
    let theme = "g100"; // "white" | "g10" | "g80" | "g90" | "g100"
   // @ts-ignore
     $: document.documentElement.setAttribute("theme", theme);


    import '@splidejs/svelte-splide/css';
    const images = import.meta.glob(['../assets/dummyImages/**.jpg'], { eager: true, query: '?url', import: 'default' });

    let getCurrentlyReading = () => {
        return currentReadingList;
    };

    let getPlannedReading = () => {

    };  

    let getFinishedReading = () => {

    };

    let curReadingList = getCurrentlyReading();

</script>

<!-- This main is going to have infinite scroll attached to it -->

    <div id="Header" class="header">
        <Heading />
    </div>
<main>
    <div id="BookList">
        <!-- These are going to be same component with different items in them -->
        <!-- Probably trying to use this image carousel -->
        <!-- https://splidejs.com/tutorials/image-carousel/ -->
         <!-- When we click we are going to navigate to the book clicked -->
        <div id="Books Reading" class="carousel">
            <Carousel cardList={curReadingList} title="Currently Reading"/>
        </div>
        <div id="Books Planned" class="carousel">
            <Carousel cardList={curReadingList} title="Planning to Read"/>
        </div>
            
        <div id="Books Read" class="carousel">
            <Carousel cardList={curReadingList} title="Finished Reading"/>
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

    .carousel {
        height: 480px;
        margin-bottom: 5vh;
    }

    main {
        margin-left: 10vw;
        margin-right: 10vw;
    }
</style>