function songs (input) {
    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = []
    let itterations = Number (input.shift());
    let magicWord = input.pop()
      for (let i = 0; i < itterations; i++) {
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song) 
      }
    if (magicWord === "all") {
        for (let z of songs) {
            console.log(z.name);
        }
    } else {
        let filtered = songs.filter((x) => x.type === magicWord);
        for (let z of filtered) {
            console.log(z.name);
        }
    }        
}
songs ([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    
    
    )