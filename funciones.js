function arrel_quadrada(array) {
    return array.map(function (element) {
        return Math.sqrt(element)
    });
}

function suma_positius(array) {
    return array.reduce(function (current, element) {
        if(element > 0) {
            return element + current;
        }

        return current
    }, 0);
}

function factorial(num) {
    const array = Array.from(Array(num).keys());

    return array.reduce(function (current, element) {
        return (element + 1) * current;
    }, 1);
}

function mida(array) {
    return array.map(function (element) {
        return element.length;
    });
}


function treballadors(array) {
    return array.filter(function(element) {
        return element.department === 'IT' && element.salary < 60000; 
    }).map(function(element) {
        return element.name;
    })
}

const employees = [
    {name: "John", salary: 50000, department: "IT"},
    {name: "Jane", salary: 60000, department: "HR"},
    {name: "Bob", salary: 55000, department: "IT"},
    {name: "Sophie", salary: 75000, department: "HR"},
    {name: "Mike", salary: 65000, department: "IT"},
    {name: "Emily", salary: 80000, department: "HR"},
    {name: "David", salary: 70000, department: "IT"}
];