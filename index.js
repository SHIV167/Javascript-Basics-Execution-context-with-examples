
//Example Initiate
//alert("TESTING");

function myFunction(){
	
alert("TESTING");	
	
	
}

//Execution context


//Example One

const username = 'Shiv kumar jha';

function login()
{
	
const password = 'Test@123';	
console.log(`${username} is loging in using ${password}`);	

}
login();


//Example Two
function callApi(method)
{
	return function (url)
	{
		
		console.log(`Fetching data from ${url} using ${method}`);
	};
	
}
const url='https://ecomimpressions.com/';
const api = callApi('GET');
api(url);


//Example Three

/* let count = 0;

function updateCount() 
{
count++;	
		
}
updateCount();
updateCount();
count = 5;
console.log(count);  */

//Example Three Extended
/*
function counterWrapper()
{
	
	let count= 0;
	return function()
	{
	count++;
    console.log(count);	
		
	};
}
const updateCount = counterWrapper();
updateCount();
updateCount();
updateCount();
*/


//Ecommerce website (cart counter)
/*

function CartCounter()
{
	let _count = 0;
	function _updateCount(val){
		
		_count+=val;
	}
	
	return {
		
		increment(){
			
			_updateCount(1);
			
		},
		
		decrement()
		{
			
			_updateCount(-1);
			
		},
		value(){
			
			return _count;
		},
	};
	
}
const cartCounter = CartCounter();
cartCounter.increment();
cartCounter.increment();
cartCounter.increment();
cartCounter.decrement();
cartCounter.decrement();
cartCounter.increment();
console.log(cartCounter.value());
*/

//useState

function useState(initial)
    
{
	let _state = initial;
	function setState(value){
		
		_state = value;
	}
	function getState()
	{
		
		return _state;
	}
	
	    return [getState, setState];
}

function Counter()
{
	
	const[count, setCount] = useState(0);
	return {
		
		click(){
			
			//setCount(5);
			setCount(count()+1);
			
		},
		
		render(){
			
			console.log('value: ', count());
		},
	};
	
}

const counter = Counter();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();
counter.click();
counter.render();


