list_of_names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
    var numOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!"
}


whosPaying(list_of_names)
