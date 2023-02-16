class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions (players) {
        let result = [];
        for (let line of players) {
            let [name, age, value] = line.split('/');
            age = Number(age);
            value = Number(value);
            let playerCheck = this.invitedPlayers.find(e => e.name == name);
            if (!playerCheck) {
                this.invitedPlayers.push({name, age, value})
            } else {
                if (value > playerCheck.value) {
                    playerCheck.value = value;
                }
            }
           if (!result.includes(name)) {
            result.push(`${name}`)
           }
        }
        return `You successfully invite ${result.join(', ')}.`
    }
    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        offer = Number (offer);
        let playerCheck = this.invitedPlayers.find(e => e.name == name);
        if (!playerCheck) {
            throw new Error (`${name} is not invited to the selection list!`)
        } else {
            if (offer < playerCheck.value) {
                let priceDiff = playerCheck.value - offer;
                throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDiff} million more are needed to sign the contract!`)
            } else {
                playerCheck.value = "Bought";
                return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
            }
        }
    }
    ageLimit(name, playerAge) {
        let playerCheck = this.invitedPlayers.find(e => e.name == name) 
        if (!playerCheck) {
            throw new Error (`${name} is not invited to the selection list!`)
        } 
            
            if (playerCheck.age >= playerAge) {
                return `${name} is above age limit!`
            } else {
                let ageDiff = Math.abs(playerAge - playerCheck.age);
                if (ageDiff < 5) {
                    return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`
                } else if (ageDiff > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            }
           
           
    }
    transferWindowResult() {
        let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        let result = [];
        for (const el of sorted) {
            result.push(`Player ${el.name}-${el.value}`)
        }
        result.unshift("Players list:");
        return result.join('\n')
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/160"]));







