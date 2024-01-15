async function youTube() {

    let data = await fetch("./data.json");

    let val = await data.json();

    // console.log(val);

    let playbox = document.getElementById("playbox");
    // console.log(playbox.innerHTML);

    let playlist = document.getElementById("playlist")
    // console.log(playbox);

    // console.log(playlist);
    for (let i of val) {
        let div = document.createElement("div")

        div.innerHTML =  `
                        <img src="${i.thumbnail}" height="150px" width="250px">
                        <h1> ${i.title} </h1>
                        <br>
                        `

            //  console.log(div);
            playlist.appendChild(div)

            div.addEventListener("click" , () =>   {
                playbox.innerHTML = `<video src="${i.video}"  controls autoplay></video>`
            })
    }   
}
youTube();