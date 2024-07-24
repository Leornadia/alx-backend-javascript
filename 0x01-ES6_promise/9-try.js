
import guardrail from './9-try';
import divideFunction from './8-try'; // Example function to be used

// Testing guardrail with a successful division
console.log(guardrail(() => {
    return divideFunction(10, 2);
}));

// Testing guardrail with a division by zero
console.log(guardrail(() => {
    return divideFunction(10, 0);
}));
