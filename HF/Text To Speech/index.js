import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens

const hf = new HfInference(process.env.HF_TOKEN)

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const text = "It's an exciting time to be an A.I. engineer."

const response = await hf.textToSpeech({
  inputs: text,
  model: "espnet/kan-bayashi_ljspeech_vits"
})

console.log(response)

const audioElement = document.getElementById('speech')
const speechUrl = URL.createObjectURL(response)
audioElement.src = speechUrl