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

    some: {
        
    }
};


function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){
        if(Array.isArray(course)){
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
