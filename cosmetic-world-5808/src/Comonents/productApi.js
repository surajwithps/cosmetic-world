const hello = ()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '84bb83bb0dmsh65ad238cfdb6a6cp1aa988jsne3e8a80f7174',
        'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
      }
    };
    // https://makeup.p.rapidapi.com/products.json?brand=colourpop&product_category=lipstick
    fetch('https://makeup.p.rapidapi.com/products.json?brand=colourpop&product_category=lipstick', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    } 

  useEffect(()=>{
    // hello()
  }, [])