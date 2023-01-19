function constructionCrew (obj) {
// let worker = {}
    
//     for (const el in obj) {
//         if (el != "dizziness") {
//             worker[el] = obj[el]
//         } else {
//             if (el != true) {
//                 worker[el] = obj[el]
//             } else {
//                 worker["levelOfHydrated"] += Number (worker["experience"]) * Number (worker["weight"]) * 0.1
//                 worker["dizziness"] = false;
//             }
//         }
        
//     }
//     return worker
    if (obj.dizziness) {
        obj.levelOfHydrated = obj.weight * 0.1 * obj.experience;
        obj.dizziness = false;
    }
    return obj





}
constructionCrew ({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  
  )