function arenaTier(array) {
  let gladiators = {};
  let readLine = array.shift();

  while (readLine !== "Ave Cesar") {
    let length = readLine.length;
    if (readLine.includes("->")) {
      let [name, technique, skill] = readLine.split(" -> ");
      skill = Number(skill);
      if (!gladiators.hasOwnProperty(name)) {
        gladiators[name] = {};
      }
      if (
        !gladiators[name].hasOwnProperty(technique) ||
        gladiators[name][technique] < skill
      ) {
        gladiators[name][technique] = skill;
      }
    } else {
      let [glad1, glad2] = readLine.split(" vs ");
      if (
        gladiators.hasOwnProperty(glad1) &&
        gladiators.hasOwnProperty(glad2)
      ) {
        let gladTech1 = gladiators[glad1];
        let gladTech2 = gladiators[glad2];
        for (const tech in gladTech1) {
          if (gladTech2.hasOwnProperty(tech)) {
            if (gladTech2[tech] > gladTech1[tech]) {
              delete gladiators[glad1];
            } else {
              delete gladiators[glad2];
            }
          }
        }
      }
    }
    readLine = array.shift();
  }
  for (let key in gladiators) {
    let sum = 0;
    let num1 = gladiators[key];
    for (let element in num1) {
      sum += Number(num1[element]);
    }
    num1["total"] = sum;
  }

  Object.entries(gladiators)
    .sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0]))
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1].total} skill`);
      delete el[1].total;
      Object.entries(el[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((el) => {
          console.log(` - ${el[0]} <!> ${el[1]}`);
        });
    });
}
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
