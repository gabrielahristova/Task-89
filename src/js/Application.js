import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
      alert("💣");
    });

    this.emit(Application.events.READY);

    let url = `https://swapi.boom.dev/api/planets`;

    let _loading;
  }
}
