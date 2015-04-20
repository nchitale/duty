//slightly improved from completely random assignment: everyone will have at most 3 and at least 1. 
//but, takes a while (like 2min max maybe)

//future steps: 
//avoid 2 consecutives. 
//then try to give everyone 1 on and 1 in.
//once it's working perfectly for 1 week, extend it to all weeks
//factor in holiday duties
//then, give everyone an even number of weekend and weekday duties

//Global Constants
var NUM_RAs = 14;
var NUM_DUTY_STAFF = 4;
var NUM_DAYS_IN_WEEK = 7;
//only for testing - 10th week
var ROW_POSITION = 94;
var COL_POSITION = 3;

function metaDutyScheduler() {
  
  var numIterations = 0;
  
  for(;;) {
    numIterations++;
    var result = dutyScheduler();
    if (result == false) {
      clearDuties();
      continue;
    }
    
    else
      break;
  }
  
  Logger.log(numIterations);

}

function dutyScheduler() 
{

  //Setting up all the data structures.
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var currentQuarter = spreadSheet.getSheetByName("Spring Quarter");

  //Right now, just looking at 10th week
  var range = currentQuarter.getRange(ROW_POSITION, COL_POSITION, NUM_RAs, NUM_DAYS_IN_WEEK);
  var values = range.getValues();
  
  //array of days of the week
  //each index represents a day (0 = sunday, 1 = monday, etc) 
  //at each index will be the number of people who requested this day off
  var days = new Array();
  
  //array of RAs 
  //ordered in same order as spreadsheet, from Cove 2 to Landing 9, so 0 = Nandini, 1 = Lindsay, etc
  //at each index will be the number of duties that person has for this week, obviously starts out as 0 unless SPECIAL DUTY DAY
  var RAs = new Array();
  for (var i = 0; i < NUM_RAs; i++)
    RAs[i] = 0;
  
  //Algorithm
  for (var col = 0; col < NUM_DAYS_IN_WEEK; col++) { //for each day
  //check how many people did not request this day off
    var notOff = 0;
    for (var row = 0; row < NUM_RAs; row++) { //for each person on this day
     var currentCell = values[row][col];
     if (currentCell.valueOf() == "") { //empty cell
       notOff++;
     } //end if
    } //end for each person
    
    days.push(notOff); //e.g. if currently on tuesday, and 3 people requested tuesday off, days[2] will be NUM_RAs-3 = 11

  //push on1, on2, in1, into, and empty strings into array until its size equals notOff
  var currentDay = new Array(); //holds the duty assignments for the current day
  currentDay.push("on 1");
  currentDay.push("on 2");
  currentDay.push("in 1");
  currentDay.push("in 2");
  for (var i = NUM_DUTY_STAFF; i < notOff; i++) { //i think this gets the correct number??? otherwise try i <= notOff
    currentDay.push("");
  }
  
  //shuffle array to make it random (so it's not always the lower Cove floors getting on 1)
  shuffle(currentDay);
 
  //assign accordingly to people in that day (who were not off)
  for (var row = 0, i = 0; row < NUM_RAs; row++) { //for each person on this day
     var currentCell = values[row][col];
     if (currentCell.valueOf() == "") { //empty cell
       currentQuarter.getRange(ROW_POSITION+row, COL_POSITION+col).setValue(currentDay[i]); //sets cell to either a duty or empty
       if (currentDay[i] != "") {//if the cell was set to a duty
         RAs[row]++; 
         if (RAs[row] > 3)
           return false; //we don't want anyone to have more than 3 in a week!
         
       } //end bracket for  if stmt #2
       i++;
     } //end bracket for if stmt #1
        
    } //end bracket for each person
      
  } //end bracket for each day
  
  /*
  //check if each RA has exactly 2
 for (var row = 0; row < NUM_RAs; row++) {
      if (RAs[row] > 3 || RAs[row] < 1) {
        return false;
      }
 }//end last for
 */
  
  /*
    for (var row = 0; row < NUM_RAs; row++) {
    Logger.log(RAs[row]); //number of duties each person has
  }
  */
  
} //end bracket for duty scheduler function
