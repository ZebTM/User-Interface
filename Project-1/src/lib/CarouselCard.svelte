<script>
    import { navigate, Link, Router, Route } from "svelte-routing";
    import Review from "../Review.svelte";

    /**
     * 
     */
    export let title;
    export const description = '';
    export let img;
    export let altText = 'unknown image';
    export let colorTheme;
    // export let imgSize;

    let navigateToBook = () => {
        // console.log( "Clicked on " + title);
        let camelCase = title.replaceAll(' ', '');

        navigate('/reviews/' + camelCase);
        // return '/reviews/' + camelCase;
    }

    let getCardProps = () => {
        return {
            title: title,
            description, 
            img,
            altText
        }
    }
</script>

    <!-- <Route path="/reviews/:book" let:params>
        <Review book={title} />
    </Route> -->
<div>
    <button class={colorTheme === "darkMode" ? "carousel-card" : "carousel-card-light"} on:click={navigateToBook} >
        <img src={img} alt={altText} />
    </button>
</div>
<p>{title}</p>

<style>
    .carousel-card {
        text-align: center;
        background-color: #262626;
        border-radius: 5px;
        overflow: hidden;
        height: 100%;
        border-color: transparent;
        width: 100%;
        /* width: 150px; */
        /* padding-top: 150%; This ensures a 2:3 aspect ratio (150px width, 225px height) */
        /* position: relative; */
        /* overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2); */
        /* background-image: url(img); */
    }


    .carousel-card-light {
        text-align: center;
        color: white;
        background-color: rgb(100, 116, 139);
        border-radius: 5px;
        overflow: hidden;
        height: 100%;
        border-color: transparent;
        width: 100%;
        /* width: 150px; */
        /* padding-top: 150%; This ensures a 2:3 aspect ratio (150px width, 225px height) */
        /* position: relative; */
        /* overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2); */
        /* background-image: url(img); */
    }

    img {
        /* height: calc(100% - 3.75rem); */
        /* position: absolute;
            top: 0;
            left: 0;*/
            width: 100%;
            height: 100%; 
            object-fit: cover;
    }
</style>