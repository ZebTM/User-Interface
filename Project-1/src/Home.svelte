<script>
    import Carousel from './lib/Carousel.svelte';
    // @ts-ignore
    import Heading from './lib/Header.svelte';
    import currentReadingList from './assets/currentlyReading.json';
    import previouslyRead from './assets/previouslyRead.json';
    import { Slider } from 'carbon-components-svelte';
    let goalReviews = 0;

    export let colorTheme;

    import '@splidejs/svelte-splide/css';
    const images = import.meta.glob(['../assets/dummyImages/**.jpg'], { eager: true, query: '?url', import: 'default' });

    let getCurrentlyReading = () => {
        return currentReadingList;
    };

    let getPlannedReading = () => {
        
    };  

    let getFinishedReading = () => {
        return previouslyRead
    };

    let numberOfReviews = Number(localStorage.getItem( 'totalComments' ))

    let curReadingList = getCurrentlyReading();
    let prevReadingList = getFinishedReading();
</script>

<!-- This main is going to have infinite scroll attached to it -->
{@debug previouslyRead}
<!-- <div id="Header" class="header">
    <Heading />
</div> -->
<main>
    <div id="BookList">
        <!-- These are going to be same component with different items in them -->
        <!-- Probably trying to use this image carousel -->
        <!-- https://splidejs.com/tutorials/image-carousel/ -->
         <!-- When we click we are going to navigate to the book clicked -->
        <div id="Books Reading" class="carousel">
            <Carousel colorTheme={colorTheme} cardList={curReadingList} title="Currently Reading"/>
        </div>
        <!-- <div id="Books Planned" class="carousel">
            <Carousel colorTheme={colorTheme} cardList={curReadingList} title="Planning to Read"/>
        </div> -->
            
        <div id="Books Read" class="carousel">
            <Carousel colorTheme={colorTheme} cardList={prevReadingList} title="Finished Reading"/>
        </div>
    </div>
    <div class="BookGraph">
        <Slider labelText="Goal: Number of books reviewed" bind:value={goalReviews} />
        <p>Actual Number of Reviews: {numberOfReviews}</p>
        {#if numberOfReviews >= goalReviews}
            <p>YOU HIT YOUR GOAL</p>
        {/if}
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

    .BookGraph {
        padding-bottom: 5rem;
    }
</style>