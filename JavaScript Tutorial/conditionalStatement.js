// if else statement
var age = 23
if (age >= 65){
    console.log("You get your income from your pension")
}
else if (age < 65 && age >=18){
    console.log("Each month you get a salary")
}
else if (age < 18){
    console.log("You get an allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}

// switch statement
var day = "Sunday"
switch(day)
{
    case "Monday":
        console.log("It is day 1 of the week!")
        break;
    case "Tuesday":
        console.log("It is day 2 of the week!")
        break;
    case "Wednesday":
        console.log("It is day 3 of the week!")
        break;
    case "Thursday":
        console.log("It is day 4 of the week!")
        break;
        case "Friday":
            console.log("It is day 5 of the week!")
            break;
        case "Saturday":
            console.log("It is day 6 of the week!")
            break;
        case "Sunday":
            console.log("It is holiday today!")
            break;
        default :
            console.log('There is no such day')
    }