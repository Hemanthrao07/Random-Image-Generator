document.getElementById('new-button').addEventListener('click', async() =>{
    try{
        const response= await fetch("https://random.dog/woof.json");
        const data = await response.json();
        document.getElementById('image').src = data.url;
    }
    catch(error){
        console.error('error fetching image', error);
    }
}); 