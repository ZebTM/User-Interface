<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './Home.svelte';
  import CreateReview from './CreateReview.svelte';
  import Header from './lib/Header.svelte';
</script>

<Router>
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="/create-review">Create Review</Link>
  </nav> -->

  <Route path="/home" component={Home} />
  <Route path="create-review" component={CreateReview} />
</Router>

<style>
</style>
