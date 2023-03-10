import EventEmitter from "eventemitter3";
import image from "../images/planet.svg";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = this._render({
      name: "Placeholder",
      terrain: "placeholder",
      population: 0,
    });

    document.body.querySelector(".main").appendChild(box);

    this.emit(Application.events.READY);

    
    }


  _render({ name, terrain, population }) {
    return `
<article class="media">
  <div class="media-left">
    <figure class="image is-64x64">
      <img src="${image}" alt="planet">
    </figure>
  </div>
  <div class="media-content">
    <div class="content">
    <h4>${name}</h4>
      <p>
        <span class="tag">${terrain}</span> <span class="tag">${population}</span>
        <br>
      </p>
    </div>
  </div>
</article>
    `;
  }

  _load = async () => {
    let data = fetch(`https://swapi.boom.dev/api/planets`);
    let x = await data.text();
    document.getElementsByClassName('main').innerHTML = x;
    fetch("https://swapi.boom.dev/api/planets/1/")
    .then(x => x.text())
    .then(document.getElementsByClassName('main').innerHTML = x);
    fetch("https://swapi.boom.dev/api/planets?page=2")
    .then(x => x.text())
    .then(document.getElementsByClassName('main').innerHTML = x);
    fetch("https://swapi.boom.dev/api/planets?page=3")
    .then(x => x.text())
    .then(document.getElementsByClassName('main').innerHTML = x);
    fetch("https://swapi.boom.dev/api/planets?page=4")
    .then(x => x.text())
    .then(document.getElementsByClassName('main').innerHTML = x);
    fetch("https://swapi.boom.dev/api/planets?page=5")
    .then(x => x.text())
    .then(document.getElementsByClassName('main').innerHTML = x);
    fetch("https://swapi.boom.dev/api/planets?page=6")
    .then(x => x.text())
    .then(document.getElementsByClassName('main').innerHTML = x);

  }

  _create = () => {

  }
  _startLoading = () => {

  }
  _stopLoading = () => {
    let progress = document.getElementsByTagName('progress');
    progress.style.display = 'none'
  }

  
}
