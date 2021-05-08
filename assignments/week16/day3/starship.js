const fetch = require('node-fetch');

const run = async () => {
    try{
        let res = await fetch('https://swapi.co/api/starships/');
        let data = await res.json();
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}
run();
