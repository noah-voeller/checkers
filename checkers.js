	$(document).ready(function() {
		$(".drag2").draggable({helper:"clone"});
		$(".drag2").on("dragstop", function(e, ui) {
			console.log(e.target);
			var cell=getCellForCheckerPosition(ui.offset);
			console.log(cell);
			if(cell){
				$(e.target).animate(getposition(cell));
			}
		});
	});

	function findCellIndex(row, column){
		var result=8*(row-1)+column-1;
		return result;
	}
	function findCell(row, column){
		var cellIndex=findCellIndex(row, column);
		return $("#board tr td")[cellIndex];
	}
	function getCellForCheckerPosition(checkerPos){
		for (var x=1; x<=8; x++){
			for(var y=1; y<=8; y++){
				var cell=findCell(x, y);
				//console.log(x, y, cell);
				var cellPos=getposition(cell);
				//console.log(cellPos)
				var isinside=istheckeckerwithinthecellrange(checkerPos, cellPos);
				if(isinside){
					return cell;
				}
			}
		}
	}
	function getposition(cell){
		var position=$(cell).position();
		return position;
	}
	function istheckeckerwithinthecellrange(checkerpos, cellPos){
		var minX=cellPos.left;
		var maxX=cellPos.left+81;
		var minY=cellPos.top;
		var maxY=cellPos.top+81;
		console.log(checkerpos);
		var checkercenter={
			left : checkerpos.left +40,
			top : checkerpos.top + 40
		};
		//checkerpos.left=checkerpos.left+40;
		//checkerpos.top=checkerpos.top+40;
		console.log(checkercenter);
		var isInXRange=checkercenter.left>=minX&&checkercenter.left<=maxX;
		var isInYRange=checkercenter.top>=minY&&checkercenter.top<=maxY;
		var isInBothRanges=isInXRange&&isInYRange;
		return isInBothRanges;
	}

	function testistheckeckerwithinthecellrange() {
		var checkerPos1 = {
			top : 10,
			left: 20
		};
		var checkerPos2 = {
			top : 100,
			left: 90
		}
		var cellPos = {
			top: 80,
			left: 60
		};
		if(istheckeckerwithinthecellrange(checkerPos1, cellPos)) {
			throw new Error("Nope! Sorry! Try again! First test failed.");
		}
		if(!istheckeckerwithinthecellrange(checkerPos2, cellPos)) {
			throw new Error("Nope! Sorry! Try again! Second test failed.");
		}
		alert("Yay!");
	}
	function addchecker(){
		/*<div class="drag2">
		<img id="img2" alt="checkerspiece.png" src="checkerspiece.png" />
	</div>
	*/
		var checker = document.createElement('div');
		checker.innerText="hello";
		document.body.appendChild(checker);
	}