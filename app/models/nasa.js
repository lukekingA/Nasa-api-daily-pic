export default class Nasa {
  constructor(data) {
    this.date = data.date
    this.explanation = data.explanation
    this.url = data.url
    this.title = data.title
  }

  get Template() {
    return `
<div class="card">
  <img class="card-img-top" src="${this.url}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${this.title}</h4>
    <p class="card-text">
     At ${this.date}
    </p>
    <p>${this.explanation}</p>
  </div>
</div>
    `
  }
}