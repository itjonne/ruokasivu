async function getData(url) {
    console.log('lähettii hakee dataa');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const response = await fetch(proxyurl + url);
    const response = await fetch(url);
    return response.json()
}