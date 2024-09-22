<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';
    const images = import.meta.glob(['$lib/assets/dummyImages/**.jpg', '$lib/assets/dummyImages/**.png', '$lib/assets/dummyImages/**.svg'], { eager: true, as: 'url' });
    // <!--You can change allowed extensions here, or you could do something like '$lib/assets/**' without an extension to allow imports for any file types. The '**' allows for nested folders, so you can replace it with '*' if all assets are directly stored in the assets folder-->

    /**
     * 
     * @param title - Title for the Carousel
     */
    export let title;


    import img from '../assets/dummyImages/image01.jpg';


    const generateSlides = ( length = 6, sig = 0 ) => {
        return Array.from( { length } ).map( ( _, index ) => {
            index = sig || index;

            return {
                src: `../assets/dummyImages/image0${ index + 1 }.jpg`,
                alt: `Image ${ index }`,
            };
        } );
    }
    const slides = generateSlides();

    const options = {
        perPage: 2,
        gap    : 0,
        height : '10rem',
        rewind : true,
    }
</script>


{@debug images}
<h2> {title}</h2>  
<Splide options={ options } aria-labelledby="reactivity-example-heading">
    { #each slides as slide }
      <SplideSlide>
        <!-- <img src={ slide.src } alt={ slide.alt }> -->
        <img src={ img } alt={ slide.alt }>
      </SplideSlide>
    { /each }
  </Splide>
<style>
  h2 {
    padding-bottom: 1rem;
  }
</style>

