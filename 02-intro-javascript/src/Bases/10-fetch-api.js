const apiKey ='TfECFtP6S1Dy3gVuYNjcKK7TOYd5JfEg'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)


//Peticion sin encadenar es la peticion original

// peticion.then( (resp) => {
//     resp.json()
//         .then(data => {
//             console.log(data);
//         })
// })
// .catch(console.warn);

//peticion encadenada reduccion de codigo 

peticion.then( resp => resp.json())
.then(({data}) => {
     console.log(data.images.original.url);
     const {url} = data.images.original;
     const img = document.createElement('img');
     img.src = url;
     document.body.append(img);
})
.catch(console.warn);