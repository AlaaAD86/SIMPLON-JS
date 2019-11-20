const calculatrice = document.querySelector('.calculatrice');
const keys = calculatrice.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        const previousKeyType = calculatrice.dataset.previousKeyType;
        const calculate = (n1, operator, n2) => {
            let result = ''

            if (operator === 'add'){
                result = parseFloat(n1) + parseFloat(n2)
            } else if (operator === 'subtract'){
                result = parseFloat(n1) - parseFloat(n2)
            } else if (operator === 'multiply'){
                result = parseFloat(n1) * parseFloat(n2)
            } else if (operator === 'divide'){
                result = parseFloat(n1) / parseFloat(n2)
            }

            return result;
        }

        //remove the is-depressed class from all keys through a forEach loop
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

        //If the previousKeyType is an operator, 
            //     we want to replace the displayed number with clicked number.

        if (!action){
            if(displayNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent
            }
            calculatrice.dataset.previousKey = 'number'
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {

            const firstValue = calculatrice.dataset.firstValue;
            const operator = calculatrice.dataset.operator;
            const secondValue = displayNum;

            if(firstValue){
                display.textContent = calculate(firstValue, operator, secondValue);
            }

            calculatrice.dataset.previousKeyType = 'calculate';

            if (firstValue && operator && previousKeyType !== 'operator'){
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;

                // Update calculated value as firstValue
                calculatrice.dataset.firstValue = calcValue;
            } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculatrice.dataset.firstValue = displayNum;
            }

        console.log('operator key!');  
        //the operator should be highlighted so we know the operator is active.
        //add the is-depressed class to the operator key
        key.classList.add('is-depressed');
        //update the display to the clicked key
        //Add custom attribute
        
        calculatrice.dataset.previousKeyType = 'operator';
        //save first number = add to a custom attribute when the operator button gets clicked
        calculatrice.dataset.firstValue = displayNum;
        calculatrice.dataset.operator = action;


      
        }

     

        if (action === 'decimal'){
            console.log('decimal key');
          
               //Do nothing if string has a dot
            if (!displayNum.includes('.')){
                display.textContent = displayNum + '.';
            }else if (previousKey === 'operator'){
                display.textContent = '0';
            }

            calculatrice.dataset.previousKey  ='decimal';
        }

        if (action === 'clear'){
            calculatrice.data.previousKeyType = 'clear';
            console.log('clear key');
        }

        if (action === 'calculate'){
            console.log('equal key');
            const firstValue = calculatrice.dataset.firstValue;
            const operator = calculatrice.dataset.operator;
            const secondValue = displayNum;

            display.textContent = calculate (firstValue, operator, secondValue);

            calculatrice.dataset.previousKeyType = 'calculate';
        }

    }

})