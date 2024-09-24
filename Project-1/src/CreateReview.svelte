<script>
    import "carbon-components-svelte/css/all.css";
    import { 
        Button,
        Dropdown,
        TextInput,
        TextArea,
        Form,
        FormGroup
     } from "carbon-components-svelte";

    import Header from "./lib/Header.svelte";
    import bookList from './assets/BookList.json';
    import { navigate } from "svelte-routing";
    export let colorTheme
    /**
     * 
     * @param list - Array of strings
     */
     let createIndexedBookList = ( list = bookList ) => {
        // @ts-ignore
        return Array.from(  list ).map( ( book, index ) => {
            return {
                text: book,
                id: `${index}`
            }
        })
    }

    const chapters = createIndexedBookList()
    const rating = [
        { id: "0", text: "5"},
        { id: "1", text: "4"},
        { id: "2", text: "3"},
        { id: "3", text: "2"},
        { id: "4", text: "1"} 
    ]

    // Form Inputs Here
    let bookTitleId = "0";
    let reviewTitle;
    let bookRatingId = "0";
    let reviewBody;

    

    let onSubmitOfForm = ( event ) => {
        event.preventDefault();
        console.log(event);

        let formData = {
            book: chapters[ Number(bookTitleId) ].text,
            reviewTitle: reviewTitle,
            bookRating: rating[ Number(bookRatingId) ].text,
            reviewBody: reviewBody
        }  

        let camelCaseTitle = formData.book.replaceAll(' ', '');

        let curComments = localStorage.getItem( camelCaseTitle );
        if  ( !curComments) {
            // @ts-ignore
            curComments = []
        } else {
            curComments = JSON.parse(curComments);
        }

        let numberOfComments = Number(localStorage.getItem( 'totalComments' ))
        if ( numberOfComments === 0 ) {
            console.log(' Do nothing for now, need to')
        };
        numberOfComments = 1 + numberOfComments;
        localStorage.setItem('totalComments', String(numberOfComments))

        // @ts-ignore
        curComments.unshift(formData);
        localStorage.setItem( camelCaseTitle, JSON.stringify( curComments) );

        navigate('/reviews/' + camelCaseTitle);
    }
 
</script> 

<!-- <Header /> -->
<main>
<Form
    on:submit={onSubmitOfForm}>
    <FormGroup>
        <Dropdown
            class="chapterSelect"
            titleText="Book"
            bind:selectedId={bookTitleId}
            items={chapters}
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
</main>

<style>
    @import "./app.css";
    div { 
        text-align: right;
        
    }
    Button {
        text-align: center;
    }

    main {
        margin-left: 10vw;
        margin-right: 10vw;
    }
</style>
