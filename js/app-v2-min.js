function gameInit(){board=[0,1,2,3,4,5,6,7,8],$(".square").text(""),gameStatus(""),gameOver=!1}function turnClick(t){"number"!=typeof board[t]||gameOver||updateBoard(humanToken,t),console.log(board)}function updateBoard(t,a){$("#"+a).text(t),board[a]=t,winCheck(board,humanToken)&&(gameStatus("You Win!"),gameOver=!0)}function winCheck(t,a){for(var e=0;e<8;e++)for(var n=0;n<3&&t[termStates[e][n]]===a;n++)if(2===n)return!0}function gameStatus(t){$(".status").text(t)}var board;const termStates=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];var humanToken="O",aiToken="X",gameOver=!1;gameInit(),$(".square").click(function(t){turnClick(t.target.id)});
