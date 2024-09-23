<script>
    import { Button } from 'carbon-components-svelte'
    // @ts-ignore
    import BxsBookAdd from '~icons/bxs/book-add';
    import { navigate } from 'svelte-routing';
    import colors from 'carbon-components-svelte/css/g90.css' 

    let navigateToCreateReview = ( ) => { 
        // console.log( 'Try to navigate to create review' )
        navigate("/create-review"); 
    }

    let navigateToHome = ( ) => { 
        // console.log( 'Try to navigate to create review' )
        navigate("/home"); 
    }


</script>
<div class="header">
    <h1> Book Tracker </h1>
    <Button 
        icon={BxsBookAdd} 
        class="create-review" 
        on:click={ navigateToCreateReview }> 
        Create a new review
    </Button>
    
</div>  
<br>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        /* background-color: #1f2125; */
    }

    /* .create-review {
        background-color: #31572c;
    } */

    h1 {
        /* font-size: 1.5rem; */
        font-weight: bold;
    }
</style>