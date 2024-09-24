<script>
    // @ts-ignore
    import MaterialSymbolsEditOutline from '~icons/material-symbols/edit-outline';
    import {
        Button
    } from 'carbon-components-svelte';
    import EditReviewCommnet from './EditReviewCommnet.svelte';



    export let commentContent;
    export let colorTheme

    let editState = false;
    let editComment = ( event ) => {
        editState = true;
    }

    let editFormSubmit = ( reviewTitle, bookRating, reviewBody ) => {
        editState = false;

        commentContent.reviewTitle = reviewTitle;
        commentContent.bookRating = bookRating;
        commentContent.reviewBody = reviewBody;
    }
</script>

{@debug commentContent}
<div class={colorTheme === "darkMode" ? "comment" : "comment-light"}>
    {#if !editState}
    <div>
        <div class="commentTitle">
            {commentContent.reviewTitle}
        </div>
        <div class="rating">
            <p style="padding-right: 10px"><strong>Review Rating: </strong></p>
            <p>{commentContent.bookRating}</p>
        </div>
        <div class="reviewBody"> 
            <em>{commentContent.reviewBody}</em>
        </div>
    </div>

    <div class="editButton">
        <button on:click={editComment} >
            <MaterialSymbolsEditOutline />
        </button>
    </div>
    {:else}
        <EditReviewCommnet 
            parentFormSubmit={ editFormSubmit } 
            bookRating = {commentContent.bookRating}
            reviewTitle= {commentContent.reviewTitle}
            reviewBody={commentContent.reviewBody}
            bookTitle={commentContent.book}
            />
    {/if}
</div>

<style>
    .comment {
        background-color: #31363d;
        border-radius: 15px;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .comment-light {
        color: white;
        background-color: rgb(100, 116, 139);
        border-radius: 15px;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .commentTitle {
        font-weight: bold;
        font-size: x-large;
        margin-bottom: 10px;
    }

    .rating {
        display: flex;
        margin-bottom: 10px;
    }

    button {
        width: 60px;
        height: 60px;
        border-radius: 25%; /* Makes the button round */
        background-color: #0f62fe; /* Carbon Blue */
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0353e9; /* Darker blue on hover */
    }

    button:active {
        background-color: #002d9c; /* Even darker blue on active */
    }
    

    .reviewBody {
        margin-left: 10px;
    }

    
</style>