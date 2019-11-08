import * as $ from 'jquery';

(function ($) {

	$.fn.iasSlider = function(): string {return }
})(jQuery);

class IasSlider {
constructor() {}
createSlider () {
	// let div = document.createElement('div');
	// div.classList.add("slider");
	return "success";
}
}

interface Pet {
	speak(): void;
	run(meters: number): void;
	bringToy?(toy?: string): string; 
	name: string;
}

class Dog implements Pet {
	name: any;
	speak(): void {
			console.log('Bark!');
	}

	run(meters: number): void {
			console.log(`${this.name} ran for ${meters} meters`);
	}
}