import './app.css'
// @ts-ignore
import App from './App.svelte'
// @ts-ignore
import CreateReview from './CreateReview.svelte'
// @ts-ignore
import Home from './Home.svelte';

const app = new App({
  target: document.getElementById('app'),
})

export default app
