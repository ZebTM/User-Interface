<script>
    import {
        Form,
        FormGroup,
        Button,
        Dropdown,
        TextInput,
        TextArea
    } from 'carbon-components-svelte';

    export let parentFormSubmit;
    export let bookTitle;
    export let reviewTitle;
    export let bookRating;
    export let reviewBody;

    let onFormSubmit = ( event ) => {
        event.preventDefault();

        parentFormSubmit( reviewTitle, bookRating, reviewBody);
    } 

    


    let bookRatingId = String( Math.abs((Number(bookRating) - 5))  );
    console.log(bookRatingId)
    const rating = [
        { id: "0", text: "5"},
        { id: "1", text: "4"},
        { id: "2", text: "3"},
        { id: "3", text: "2"},
        { id: "4", text: "1"} 
    ]
</script>
<Form
    on:submit={onFormSubmit}>
    <FormGroup>
        <Dropdown
            class="chapterSelect"
            titleText="Book"
            disabled
            selectedId="0"
            items={ [{id: "0", text: bookTitle}] }
            />

        <TextInput 
            labelText = "Title"
            placeholder = "Enter title . . ." 
            bind:value={reviewTitle}
            />
        <Dropdown
            class="chapterSelect"
            titleText="Rating"
            bind:selectedId={bookRatingId}
            items={rating}
            />
    </FormGroup>


    <TextArea
        labelText = "Book Review"
        placeholder = "Enter a description..."
        bind:value={reviewBody} />
    <Button type="submit" class="button"> Submit </Button>
</Form>
<style>

</style>