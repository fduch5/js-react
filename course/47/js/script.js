const students = {
    js: [{
            name: "John",
            progress: 100
        }, {
            name: "Ivan",
            progress: 60
    }],

    html: {
        basic: [{
            name: "Peter",
            progress: 20
        }, {
            name: "Anna",
            progress: 18
        }],

        pro: [{
            name: "Sam",
            progress: 10
        }]
    },

    semi: {
        students: [{
            name: "Andrey",
            progress: 100
        }]
    }
};


function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for(let i = 0; i < course.length; i += 1){
                total += course[i].progress;
            }
        } else {
            for(let subcourse of Object.values(course)){
                students += subcourse.length;
                for(let i = 0; i < subcourse.length; i += 1){
                    total += subcourse[i].progress;
                }
            }
        }
    }


    return total / students;
}


console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total = 0;
        for(let i = 0; i < data.length; i += 1){
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for( let subData of Object.values(data)){
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total;
    }
}

const total = getTotalProgressByRecursion(students);

console.log(total[0] / total[1]);