function messagesManager (input) {
let capacity = Number (input.shift());
let readLine = input.shift();
let users = {};
let counter = 0;

    while (readLine !== "Statistics") {
        let [command,user,...tokens] = readLine.split("=");

        if (command == "Add") {
            if (!users.hasOwnProperty(user)) {
                let sent = Number (tokens[0]);
                let received = Number (tokens[1]);

                users[user] = {sent, received}
                counter++
            }
        } else if (command == "Message") {
            let receiver = tokens[0];

            if (users.hasOwnProperty(user) && users.hasOwnProperty(receiver)) {
                users[user].sent += 1;
                users[receiver].received += 1;
                let receiverCheck = users[receiver].received + users[receiver].sent;
                let userCheck = users[user].received + users[user].sent;
                if (userCheck >= capacity) {
                    console.log(`${user} reached the capacity!`);
                    delete users[user];
                    counter--;
                }
                if (receiverCheck >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete users[receiver];
                    counter--;
                }
            }
        } else if (command == "Empty") {
            if (user === "All") {
                for (let key in users) {
                    delete users[key];
                    counter = 0;
                }
            }

            if (users.hasOwnProperty(user)) {
                delete users[user];
                counter--;
            }
            
        }

        readLine = input.shift();
    }
    console.log(`Users count: ${counter}`);
    for (const name in users) {
        let sum = users[name].sent + users[name].received;
        console.log(`${name} - ${sum}`);
    }

}
messagesManager (["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"])



