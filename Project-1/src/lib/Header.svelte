<script>
    import { Button } from 'carbon-components-svelte'
    // @ts-ignore
    import BxsBookAdd from '~icons/bxs/book-add';
    // @ts-ignore
    import IconamoonModeLight from '~icons/iconamoon/mode-light';
    // @ts-ignore
    import MaterialSymbolsDarkMode from '~icons/material-symbols/dark-mode';
    import { navigate } from 'svelte-routing';

    export let switchColorTheme;
    export let colorTheme;

    let navigateToCreateReview = ( ) => { 
        // console.log( 'Try to navigate to create review' )
        if ( true ) {
            navigate("/create-review"); 
        }
    }

    let navigateToHome = ( ) => { 
        // console.log( 'Try to navigate to create review' )
        if ( true ) {
            navigate("/home"); 
        }
        
    }
</script>

<!-- {@debug location} -->
<div class={colorTheme === "darkMode" ? "header" : "header-light"}>
    <h1  on:click={navigateToHome}> Book Tracker </h1>
    <div class="create-review" >
    <div>
        {#if colorTheme === 'lightMode'}
            <button on:click={switchColorTheme}>
                <MaterialSymbolsDarkMode />
            </button>
        {:else}
            <button on:click={switchColorTheme}>
                <IconamoonModeLight />
            </button>
        {/if}
        <Button 
        icon={BxsBookAdd} 
        
        on:click={ navigateToCreateReview }> 
        Create a new review
    </Button>
    </div>
    
</div>
    
</div>  
<br>

<style>

    button {
        width: 48px;
        height: 48px;
        border-radius: 25%; /* Makes the button round */
        background-color: transparent; /* Carbon Blue */
        color: white;
        border: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        transition: background-color 0.3s ease;
        padding-right: 1rem;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #31363d;
    }

    .header-light {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        color: white;
        background-color: rgb(100, 116, 139);
    }

    /* .create-review {
        background-color: #31572c;
    } */

    h1 {
        /* font-size: 1.5rem; */
        font-weight: bold;
        
    }

    h1:hover {
        cursor: pointer;
    }
</style>