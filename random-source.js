class RandomSource extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "random-source", RandomSource);
    }
  }

  connectedCallback() {
    this.players.forEach((player) => {
      player.addEventListener("ended", (event) => this.changeSource(player));
    });
  }

  changeSource(player) {
    const sources = this.sources(player);
    player.src = sources[Math.floor(Math.random() * (sources.length))].src;
  }

  sources(parent) {
    return parent.querySelectorAll("source:not([media],[type],[srcset])");
  }

  get players() {
    return this.querySelectorAll("audio, video");
  }
}

RandomSource.register();
