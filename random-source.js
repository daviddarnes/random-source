class RandomSource extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "random-source", RandomSource);
    }
  }

  connectedCallback() {
    if (this.sources.length > 1) {
      this.player.addEventListener("ended", (event) => this.changeSource());
    }
  }

  changeSource() {
    const pool = [...this.sources].filter(
      (source) => source.src != this.player.src
    );
    this.player.src = pool[Math.floor(Math.random() * pool.length)].src;
  }

  get sources() {
    return this.querySelectorAll("source:not([media],[type],[srcset])");
  }

  get player() {
    return this.querySelector("audio, video");
  }
}

RandomSource.register();
