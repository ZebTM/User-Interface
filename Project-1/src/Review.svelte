<script>
    import Header from "./lib/Header.svelte";
    import ReviewComment from "./lib/ReviewComment.svelte";
    // import dune from './assets/dummyImages/TheFellowshipOfTheRing.jpg'
    // import img from './assets/dummyImages/Dune.jpg';
    export let book;
    
    export let colorTheme;
    const reviewJsonPromise = import(`./assets/${book}.json`)
    let imgPromise;

    let reviewCommentsJSON = localStorage.getItem( book );
    let reviewComments;
    if ( !reviewCommentsJSON ) {
        // @ts-ignore
        reviewComments = []
    } else {
        reviewComments = JSON.parse(reviewCommentsJSON)
    }
    
</script>
<!-- {@debug img} -->
<!-- <Header /> -->
{#await reviewJsonPromise}
    <p>Waiting</p>
{:then reviewJson} 
{@debug reviewJson}
    <main class="book-container">
        <div class="book-cover" >
            {#await imgPromise = import(reviewJson.img)  then img}
            {@debug img}
                <img src={img.default} alt={reviewJson.altText} />
            {/await}
        </div>
        
        <!-- Book title in the center -->
        <div class="book-title">
            <h1>
                {reviewJson.title}
            </h1>
            
        </div>
    </main>
    <div class="comments">
        {#if reviewComments.length === 0}
            <p class={colorTheme === "darkMode" ? "darkMode": "lightMode"}> Be the first to enter a review</p>
        {:else}
            {#each reviewComments as reviewContent}
                <ReviewComment colorTheme={colorTheme} commentContent={reviewContent}/>
            {/each}
        {/if}
    </div>
{/await}



<style>
    .book-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .book-cover {
        max-width: 200px; /* Fixed width for the cover */
        margin-right: 20px; /* Space between image and title */
    }

    .book-cover img  {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 10px; /* Optional, rounds the corners */
    }

    .book-title {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }

    h1 {
        font-weight: bold; 
        font-size: 8rem;
    }
    
    .darkMode {
        padding-left: 10rem;
        height: 5rem;
        background-color: #31363d;
        border-radius: 15px;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .lightMode {
        padding-left: 10rem;
        height: 5rem;
        color: white;
    background-color: rgb(100, 116, 139);
        border-radius: 15px;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


</style>

