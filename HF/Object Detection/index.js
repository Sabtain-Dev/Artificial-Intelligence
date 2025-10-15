
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.8.0'

// Reference the elements that we will need
const status = document.getElementById('status')
const image = document.getElementById('image')

// Load model and create a new object detection pipeline
status.textContent = 'Loading model...'

status.textContent = 'Done!'