<script>
    import "carbon-components-svelte/css/all.css";
    import { 
        Button,
        Dropdown,
        TextInput,
        TextArea
     } from "carbon-components-svelte";

    // Theme Stuff
    let theme = "g90"; // "white" | "g10" | "g80" | "g90" | "g100"
    $: document.documentElement.setAttribute("theme", theme);


    // const books = [
    //     { id: "0", text: "Slack" },
    //     { id: "1", text: "Email" },
    //     { id: "2", text: "Fax" },
    // ]

    const chapters = [
        { id: "0", text: "Chapter 1" },
        { id: "1", text: "Chapter 2" },
        { id: "2", text: "Chapter 3" },
        { id: "3", text: "Chapter 4" },
        { id: "4", text: "Chapter 5" },
        { id: "5", text: "Chapter 6" },
        { id: "6", text: "Chapter 7" },
        { id: "7", text: "Chapter 8" },
        { id: "8", text: "Chapter 9" },
        { id: "9", text: "Chapter 10" },
    ]

    const rating = [
        { id: "0", text: "1"},
        { id: "1", text: "2"},
        { id: "2", text: "3"},
        { id: "3", text: "4"},
        { id: "4", text: "5"} 
    ]



</script> 


<div class="width">
    <Dropdown
        class="chapterSelect"
        hideLabel
        titleText="Contact"
        selectedId="0"
        items={chapters}
    />

    <TextInput 
        labelText = "Title"
        placeholder = "Enter title . . ." />
    <Dropdown
        class="chapterSelect"
        hideLabel
        titleText="Contact"
        selectedId="0"
        items={rating}
    />

    <TextArea
        labelText = "Book Review"
        placeholder = "Enter a description..." />
    <Button class = "button"> Submit </Button>
</div>


<style>
    @import "./app.css";
    div { 
        text-align: right;
        
    }
    Button {
        text-align: center;
    }
</style>
