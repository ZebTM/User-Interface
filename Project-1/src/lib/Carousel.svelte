<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';
    const images = import.meta.glob(['../assets/dummyImages/**.jpg'], { eager: true, query: '?url', import: 'default' });
    // <!--You can change allowed extensions here, or you could do something like '$lib/assets/**' without an extension to allow imports for any file types. The '**' allows for nested folders, so you can replace it with '*' if all assets are directly stored in the assets folder-->

    import CarouselCard from './CarouselCard.svelte';


    /**
     * 
     * @param title - Title for the Carousel
     */
    export let title;

    /**
     * 
     * @param cardList - Array of card objects
     * @param card - Object
     * @param cardTitle
     * @param cardImgSrc
     * @param cardImgAltText
     */
    export let cardList;
    export let colorTheme

    // Dummmy data
    // const generateSlides = ( length = 6, sig = 0 ) => {
    //     return Array.from( { length } ).map( ( _, index ) => {
    //         index = sig || index;

    //         return {
    //             src: images[`../assets/dummyImages/image0` + String(index + 1) + `.jpg`],
    //             alt: `Image ${ index }`,
    //         };
    //     } );
    // }
    // const slides = generateSlides();

    // const imgSize = '35rem'

    const options = {
        perPage: 5,
        gap    : '1vw',
        // height : '100%',
        rewind : true,
    }
</script>

<div class="carousel">
  <h2> {title}</h2>  
  <Splide class="splide"options={ options } aria-labelledby="reactivity-example-heading">
      { #each cardList as card }
        <SplideSlide class="slide">
          <!-- <img src={ slide.src } alt={ slide.alt }> -->
           <!-- This is fine, check the generate slides for now, eventually we should just be passing in the, books type as a parameter for an -->
          <!-- <img src={ card.src } alt={ card.imgalt }> -->
          <CarouselCard colorTheme={colorTheme} img={card.img} title={card.title} />
        </SplideSlide>
      { /each }
    </Splide>
</div>
<!-- {@debug images} -->

<style>
  .carousel {
    height: 100%;
  }

  .splide {
    height: 100%;
  }

  .slide {
    height: max-content;
  }

  h2 {
    padding-bottom: 1rem;
  }
</style>

