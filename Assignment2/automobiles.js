/* Name: Jamie Loebe
 * Class: CS 290
 * Description: This will sort and print out to the console a list of cars in 
 * different orders (year, make and type).
 */

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];
    
Automobile.prototype.logMe = function(printAuto){
  print = "(" + this.year + "  " + this.make + "  " + this.model + "  " + this.type;
  
  if(printAuto)
  print = print + "  " + this.type;
  
  print = print + ")";
  
  console.log(print);
}

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/

/*The algorithm used for sorting the array is bubble sort */
function sortArr(comparator, array ){
    
  for(i=0; i<array.length; ++i)
    { 
      for(j=0; j<i ; ++j)
      {     
        if (comparator(array[i], array[j]))         
        {
         
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }

    }
  return array;
}


/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
  return auto1.year >auto2.year;
  }

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
  return auto1.make.toUpperCase() < auto2.make.toUpperCase();
  }

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var orderOfType = ["roadster", "pickup", "suv", "wagon", "sedan"]; /* Cars listed in order by type */
    var typeComp1 = orderOfType.indexOf(auto1.type.toLowerCase());
    var typeComp2 = orderOfType.indexOf(auto2.type.toLowerCase());

    if (typeComp1 === typeComp2)
    {
    	return auto1.year > auto2.year; /* If cars are of same type, sort by year */
    }
    
    else
    {
        return typeComp1 > typeComp2; /* Else, sort by type of car */
    }
}

function catchAll(array, bool)
{
  for(i = 0; i < array.length; ++i)
  {
    array[i].logMe(bool);
  }
}

console.log("*****");

console.log("Cars sorted by year: ");
sortArr(yearComparator, automobiles);
catchAll(automobiles, false);

console.log("Cars sorted by make are: ");
sortArr(makeComparator, automobiles);
catchAll(automobiles, false);

console.log("Cars sorted by type are: ");
sortArr(typeComparator, automobiles);
catchAll(automobiles, true);

console.log("*****");
