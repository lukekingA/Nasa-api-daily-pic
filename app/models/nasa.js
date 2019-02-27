export default class Nasa {
  constructor(data) {
    this.date = data.date
    this.explanation = data.explanation
    this.url = data.url
    this.title = data.title
  }

  get Template() {
    return `
<div class="card p-3 my-3">
  <img class="card-img-top rounded shadow" src="${this.url}" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${this.title}</h4>
    <div class="d-flex justify-content-between">
    <p class="card-text">
     At ${this.date} 
    </p>
    <form onkeydown="app.controllers.nasaController.setDate(event)">
    <label for="new-pic">Get another days fantastic picture</label>
    <input id="new-pic" class="rounded pl-1" type="date">
    </form>
    </div>
    <p>${this.explanation}</p>
  </div>
</div>
    `
  }
}