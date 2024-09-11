import './app.css'
import App from './App.svelte'
import CreateReview from './CreateReview.svelte'

const app = new CreateReview({
  target: document.getElementById('app'),
})

export default app
