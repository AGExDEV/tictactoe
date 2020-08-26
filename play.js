let board = [0,0,0,0,0,0,0,0,0];
let moveCount = 0;
const tdata = document.getElementById("gameBoard").getElementsByTagName("td");
function strike(){
  board[4]= 1;
  document.getElementById("4").innerHTML="X";
  document.getElementById("4").removeAttribute("onClick");
  moveCount++
}
function counterStrike(square,userPlay){
document.getElementById(square).innerHTML="O";
document.getElementById(square).removeAttribute("onClick");
		
moveCount +=1


var start = 0;
var mult;
var inter;
var index;
var row=[];
var rowIndex =[];
var play=[];
var win = [];		// hold winning plays (square numbers)
var block = [];		// hold blocking plays 

board[square]=userPlay;

for(i=4; i>0; i--){
 index = 0;
 mult = i;
 if(i==2){ start=2; index=2; } else { start=0; }
 if(i%2==0){iter=1;} else{iter=3;}
  for(j=0; j<iter; j++){
  var rowVal =0;
	for(k=0; k<3; k++){		// create row
	  if(k<1){
		  row[k]=board[start];
		  rowIndex[k] = start;
		  console.log(row[k]);
		  if(i==3){index=start+i;}else{index += mult;}
	  }else{
		  row[k]=board[index];
		  rowIndex[k]=index;
		  console.log(row[k]);
		  index += mult;
	  }
	  rowVal += row[k];		// calculate row value
	
	} //end K
 console.log(row);
 if(rowVal==2){win[win.length] = rowIndex[row.indexOf(0)]; }
 else if(rowVal==-2){block[block.length]=rowIndex[row.indexOf(0)];}
 if(i==3){start+=1;}else{start+=3;}
 } // end J
} //end i
if(moveCount < 3){ 
	if(board[4]==0){ 
		board[4]=1; 
		document.getElementById("4").innerHTML="X";
		document.getElementById("4").removeAttribute("onClick");
		moveCount++
	} else{ 
		board[6]=1; moveCount++; 
		document.getElementById("6").innerHTML="X";
		document.getElementById("6").removeAttribute("onClick");
		moveCount++
	} console.log(board);
}else{
	var aiMove;
 	if(win.length>0){ 
		board[win[0]]=1;
		aiMove=win[0];
		document.getElementById(aiMove).innerHTML="X";
		setTimeout(function(){
			document.getElementById("msg").innerHTML= "I WIN !";
		}, 500);
		setTimeout(function(){
		  document.getElementById("playAgain").style.display = "block";
		//   location.reload();
		}, 2000);
	}else if(block.length>0){
		board[block[0]]=1;
		aiMove=block[0];
		if(moveCount>8){alert("CATS GAME"); location.reload();}
		moveCount+=1;
		
	}else{  
		for(z=0; z<9; z++){ 
			if(board[z]==0){ 
				play[play.length]=z;		
			} //ends if board[z]
		} //ends for z
		board[play[0]]=1;
		aiMove=play[0];
		if(moveCount>8){alert("CATS GAME"); location.reload();}
		moveCount+=1;
		
	}  //ends else
	document.getElementById(aiMove).innerHTML="X";
	document.getElementById(aiMove).removeAttribute("onClick");
	
} //ends else
} // ends counterStrike
function endGame(){
	const gb = document.getElementById("gameBoard");
	const td = gb.getElementsByTagName("td");
	td.array.forEach(element => {
		removeAttribute("onClick");
	}); 
	setTimeout(function(){
		document.getElementById("playAgain").style.display = "block";
	  //   location.reload();
	  }, 2000);
}