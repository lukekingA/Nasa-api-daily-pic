import NasaService from '../components/nasaService.js'

//private
let _nService = new NasaService()


function showPic() {
  let pic = _nService.ApiPicture
  let template = ''

  template += pic.Template

  document.querySelector('body').innerHTML = template
}

//public

export default class NasaController {
  constructor() {
    _nService.addSubscriber('picture', showPic)
    _nService.getApiNasaPic()
  }

  setDate(e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      let date = e.target.value
      _nService.getApiNasaPic(date)
    }
  }
}