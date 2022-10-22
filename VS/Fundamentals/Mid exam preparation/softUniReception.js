function softUniReception (array) {
    let emp1 = Number (array[0]);
    let emp2 = Number (array[1]);
    let emp3 = Number (array[2]);
    let students = Number (array[3]);

    let studentsPerHour = emp1+emp2+emp3
    let hours = 0;
        while (students > 0) {
            hours++
            if (hours % 4 ==0) {
                continue;
            }
            students -= studentsPerHour
        }
    console.log(`Time needed: ${hours}h.`);    

}
softUniReception(['3','2','5','40'])