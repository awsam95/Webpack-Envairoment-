import generateJoke from "./generateJoke"
import './styles/main.scss'
import laughing from './assets/laughing.png'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing;

console.log(generateJoke())

