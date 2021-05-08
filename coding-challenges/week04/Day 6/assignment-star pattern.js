//Assignment- Coding Challenge-2 
//Program to print star pattern

			var rows = 8;
			var col = 5;
			var k = 0
			for( i = 1; i <= rows; i++){
					i <= 4 ? k++ : k--; 
				for(j = 1; j <= col; j++){
					if(j <= k)
						document.write("*");
					else
						document.write(" ");
				}
			document.write("<br/>")
			}