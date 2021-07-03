//async -- 



  const getImagen = async() => {
      //return 'https://saddsadsa.com';
      try{
        const apiKey ='TfECFtP6S1Dy3gVuYNjcKK7TOYd5JfEg'
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json()
        const {url} = data.images.original;
  
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
      }catch(error){
        //manejo del catch
        console.log(error);
      }



    }

  getImagen();