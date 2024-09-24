<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './Home.svelte';
  import CreateReview from './CreateReview.svelte';

  import "carbon-components-svelte/css/all.css";
  import Review from './Review.svelte';
  // @ts-ignore
  import Header from './lib/Header.svelte';
  let theme = "g100"; // "white" | "g10" | "g80" | "g90" | "g100"
  // @ts-ignore
  $: document.documentElement.setAttribute("theme", theme);

  let colorTheme = "darkMode";
  let switchColorTheme = ( ) => {
    if ( colorTheme === "darkMode" ) {
      
      colorTheme = "lightMode"
      theme = "white";
    } else {
      colorTheme = "darkMode"
      theme = "g100";
    }
  }
</script>

<Router>
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="/create-review">Create Review</Link>
  </nav> -->
  <Header colorTheme={colorTheme} switchColorTheme={switchColorTheme} />
  <Route path="/home" > 
    <Home colorTheme={colorTheme} />
  </Route>
  <Route path="/create-review" >
    <CreateReview colorTheme={colorTheme} />
  </Route>
  <Route path="/reviews/:book" component={Review} colorTheme={colorTheme} let:params/>
  <!-- <Route path="/reviews/:book" component={Review} let:params>
     <Review colorTheme={colorTheme} book={} /> 
  </Route> -->
</Router>

<style>
</style>
