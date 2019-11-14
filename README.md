# ngOnChanges object example

### random-color-picker-435290
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/random-color-picker-435290)

ngOnChanges function in file **color.component.ts** (line 26):

    ngOnChanges(changes:  SimpleChange)  {
		if  (changes['color']  !==  undefined)  {
			this.updateColor();
		}
		if  (changes['gradient']  !==  undefined)  {
			this.updateGradient();
		}
	}

changing object in **app.component.ts** (line 14):

	setInterval(()=>{
		this.myColor =  {color:  this.getRandomColor()};
		this.myGradient =  { 
			color:  this.getRandomColor(), 
			color2: this.getRandomColor() 
		};
	},2000);