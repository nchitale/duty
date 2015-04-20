//Global Constants
var NUM_RAs = 14;
var NUM_DUTY_STAFF = 4;
var NUM_DAYS_IN_WEEK = 7;
//only for testing - 10th week
var ROW_POSITION = 94;
var COL_POSITION = 3;

function clearDuties() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var currentQuarter = spreadSheet.getSheetByName("Spring Quarter");

  var range = currentQuarter.getRange(ROW_POSITION, COL_POSITION, NUM_RAs, NUM_DAYS_IN_WEEK);
  var values = range.getValues();
  
   for (var col = 0; col < NUM_DAYS_IN_WEEK; col++) { //for each day
    for (var row = 0; row < NUM_RAs; row++) { //for each person on this day
     var currentCell = values[row][col];
     if (currentCell.valueOf() == "on 1" || currentCell.valueOf() == "on 2" 
     || currentCell.valueOf() == "in 1" || currentCell.valueOf() == "in 2"
     || currentCell.valueOf() == "undefined" || currentCell.valueOf() == "XOXO")
     { 
       currentQuarter.getRange(ROW_POSITION+row, COL_POSITION+col).setValue(""); //sets cell to empty
     }
      
    }
     
   }
  
}

