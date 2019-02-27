import Nasa from '../models/nasa.js'
//private

let _nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=qMLfu65BuBAxyTjzWuMuMtGLLKpuUCsBG0Em2Ops'
})

let _key = 'qMLfu65BuBAxyTjzWuMuMtGLLKpuUCsBG0Em2Ops'



let _state = {
  picture: []
}

let _subscribers = {
  picture: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}


//Public

export default class NasaService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ApiPicture() {
    return new Nasa(_state.picture)
  }


  getApiNasaPic(date = '') {
    _nasaApi.get('', {
        params: {
          date: date
        }
      })
      .then(res => {
        let data = new Nasa(JSON.parse(JSON.stringify(res.data)))
        console.log(data)
        console.log(res)
        setState('picture', data)


      })
  }
}
//`?api_key=${_key}`