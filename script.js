let idPoke = 0;

class Tamagotchi{
	constructor(name, avatar, healpoint){
		this.name = name;
		this.avatar = avatar;
		this.healpoint = healpoint;
		this.maxHP = healpoint;
		this.hunger = 100;
		this.hygiene = 100;
		this.deepression = 100;

		
	}

	createTamagotchi(id){
		let massElementPoke =[];

		const cellPoke = document.createElement('div');
		this.cellPoke = cellPoke;
		cellPoke.className = "poke";
		cellPoke.id = 'pokeID' + id;
		this.id = cellPoke.id;
		console.log(this.id);

		cellPoke.innerText = this.name;
		document.querySelector('.pokedex').append(cellPoke);


		const imgPoke = new Image();
		this.imgPoke = imgPoke;
		imgPoke.src = this.avatar;
		massElementPoke.push(imgPoke);


		const hpPoke = document.createElement('input');
		this.hpPoke = hpPoke;
		const hpPokeOutput = document.createElement('p');
		this.hpPokeOutput = hpPokeOutput;
		hpPoke.type = "range";
		hpPoke.disabled = false;
		hpPoke.max = this.healpoint;
		hpPoke.value = this.healpoint;
		hpPokeOutput.innerText = hpPoke.value +"/" + hpPoke.max + " HP";
		massElementPoke.push(hpPoke);
		massElementPoke.push(hpPokeOutput);

		const hungerStatus = document.createElement('p');
		this.hungerStatus = hungerStatus;
		this.hungerStatus.innerText = "FOOD: " + this.hunger + "/100";
		massElementPoke.push(this.hungerStatus);

		const hygieneStatus = document.createElement('p');
		this.hygieneStatus = hygieneStatus;
		this.hygieneStatus.innerText = "HYGIENE: " + this.hygiene + "/100";
		massElementPoke.push(this.hygieneStatus);

		const dipresStatus = document.createElement('p');
		this.dipresStatus = dipresStatus;
		this.dipresStatus.innerText = "DEEPRESSION: " + this.deepression + "/100";
		massElementPoke.push(this.dipresStatus);

		const divBtns = document.createElement('div');
		divBtns.id = "divBtns" + id;
		this.divBtnsId = 0;
		this.divBtns = divBtns;
		massElementPoke.push(this.divBtns);



		this.OutputCallPoke(massElementPoke);


		const eatBtn = document.createElement('button');
		this.eatBtn = eatBtn;
		eatBtn.innerText = "EAT";
		eatBtn.addEventListener('click', () => this.EatingPoke());
		const cleanBtn = document.createElement('button');
		this.cleanBtn = cleanBtn;
		cleanBtn.innerText = "CLEAN";
		cleanBtn.addEventListener('click', () => this.CleaningPoke());
		const playBtn = document.createElement('button');
		this.playBtn =playBtn;
		playBtn.innerText = "PLAY";
		playBtn.addEventListener('click', () => this.PlayingPoke());
		document.getElementById(divBtns.id).append(eatBtn);
		document.getElementById(divBtns.id).append(cleanBtn);
		document.getElementById(divBtns.id).append(playBtn);

		this.intervalOne = setInterval(() =>{
			
			if (this.hunger>0){
				this.hunger--;
			}

			
			if (this.hunger<50 && this.hunger>19) {this.healpoint--;}
			else{if (this.hunger<20) {this.healpoint=this.healpoint-3;}}

			if (this.hunger<0) {
				this.hunger=0;
			}

			this.OutputInfoPoke();
			this.DeadPoke();
			
		},5000);

		this.intervalTwo = setInterval(() =>{
			

			if (this.deepression>0){
				this.deepression--;
			}

			if (this.deepression<40 && this.deepression>9) {this.healpoint--;}
			else{if (this.deepression<10) {this.healpoint=this.healpoint-4;}};

			if (this.deepression<0) {
				this.deepression=0;
			}

			if (this.hunger>60 && this.deepression>50 && this.hygiene>70 && this.healpoint<this.maxHP) {this.healpoint++;}
			this.OutputInfoPoke();
			this.DeadPoke();
			
		},8000);

		this.intervalThree = setInterval(() =>{

			if (this.hygiene>0){
				this.hygiene--;
			}

			
			if (this.hygiene<60 && this.hygiene>14) {this.healpoint--;}
			else{if (this.hygiene<15) {this.healpoint=this.healpoint-5;}}

			if (this.hygiene<0) {
				this.hygiene=0;
			}
			
			this.OutputInfoPoke();
			this.DeadPoke();
			
		},10000);
	}



	EatingPoke(){
		this.hunger += 10;
		if (this.hunger>100) {this.hunger =100;}
		this.OutputInfoPoke();
	}

	CleaningPoke(){
		this.hygiene += 15;
		if (this.hygiene>100) {this.hygiene =100;}
		this.OutputInfoPoke();
	}

	PlayingPoke(){
		this.deepression += 5;
		if (this.deepression>100) {this.deepression =100;}
		this.OutputInfoPoke();
	}

	DeadPoke(){
		console.log("Hello im dead")
		if (this.healpoint<=0) {
			this.imgPoke.src = 'img/dead.png';
			clearInterval(this.intervalOne);
			clearInterval(this.intervalTwo);
			clearInterval(this.intervalThree);
			this.hunger = 0;
			this.hygiene = 0;
			this.deepression = 0;
			this.healpoint = 0;
			this.eatBtn.disabled = true;
			this.playBtn.disabled = true;
			this.cleanBtn.disabled = true;
			this.OutputInfoPoke();
			this.cellPoke.style.background = "#582d2d";
			this.cellPoke.style.color = "#40514E";
			
		}
	}

	OutputInfoPoke(){
		this.hpPoke.value = this.healpoint;
		this.hpPokeOutput.innerText = this.healpoint +"/" + this.hpPoke.max + " HP";
		this.hungerStatus.innerText = "FOOD: " + this.hunger + "/100";
		this.hygieneStatus.innerText = "HYGIENE: " + this.hygiene + "/100";
		this.dipresStatus.innerText = "DEEPRESSION: " + this.deepression + "/100";
	}

	OutputCallPoke(array){
		for(let i = 0; i<array.length; i++){
			document.getElementById(this.id).append(array[i]);
		}
	}

}



let pokemons =[
	 ["Venusaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png", 400],
	 ["Charizard", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png", 400],
	 ["Blastoise", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png", 400],
	 ["Butterfree", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png", 400],
	 ["Beedrill", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png", 400],
	 ["Ninjask", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/291.png", 550],
	 ["Spectrier", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/897.png", 500],
	 ["Luxray", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/405.png", 550],
	 ["Nidorino", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png", 350],
	 ["Chimchar", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/390.png", 200],
	 ["Falinks", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/870.png", 600],
	 ["Sandile", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/551.png", 200],
	 ["Aipom", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/190.png", 250],
	 ["Jolteon", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png", 300],
	 ["Cacnea", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/331.png", 300],
	 ["Drampa", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/780.png", 400],
	 ["Tapu Fini", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/788.png", 350],
	 ["Piplup", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/393.png", 200],
	 ["Palkia", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/484.png", 600],
	 ["Buizel", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/418.png", 450],
]

function pokeAdd(){
	const randPoke = pokemons[Math.floor(Math.random() * pokemons.length)];
	console.log(randPoke);
	const newPoke = new Tamagotchi(randPoke[0],randPoke[1],randPoke[2]);
	idPoke++;
	newPoke.createTamagotchi(idPoke);
}