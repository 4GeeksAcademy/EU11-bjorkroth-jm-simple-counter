import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// NOT WORKING TO IMPORT ICON
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faClock } from "@fortawesome/free-solid-svg-icons";
//const clockIcon = <FontAwesomeIcon icon="fa-solid fa-clock" />;

function SecondsCounterClean(){
    const [seconds, setSeconds] = useState(0);

    // Update the state at an interval of 1 sec.
    useEffect(() => {
        // setInterval takes a function and calls it every interval
        const interval = setInterval( () => {
            // We use our setState function to update the state by adding 1 to its current value
            setSeconds((currentState) => currentState+1);
        }, 1000);

        // To avoind memory leaking (interval saving all calculations) we  
        return () => clearInterval(interval);

        // dependency: list of all reactive values referenced inside of the setup code (the useEffect function)
    }, [setSeconds])

    const digitSix = Math.floor(seconds/100000)%10;
    const digitFive = Math.floor(seconds/10000)%10;
    const digitFour = Math.floor(seconds/1000)%10;
    const digitThree = Math.floor(seconds/100)%10;
    const digitTwo = Math.floor(seconds/10)%10;
    const digitOne = Math.floor(seconds/1%10)

    return(
        <div className="myCounter">
            <div className="clock">±</div>
            <div className="six">{digitSix}</div>
            <div className="five">{digitFive}</div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div> 
        </div>
        );
};

export {SecondsCounterClean}

//create your first component
function ClockComponent(){

    // useState - is used to  initialize a variable and change its value over time without the need for parent components. 
    // [variable name, modifier name] = useState (inital value ) 
    const [time, setTime] = useState(new Date());
    // above:  "time" variable is initialized with get new Date() Constructor and can then be re-set using the setTime function
    // https://www.w3schools.com/js/js_date_methods.asp

    // useEffect is used to: execute some code after the component renders 
    // useEffect( setup function with Effect's logic , dependencies)
    // setting up useEffect with a function that uses setInterval - a function to run a function at a set interval 
    useEffect( function(){
        // setInterval(function to run, with what internval to run it, in miliseconds) 
        setInterval( function() {setTime(new Date())}, 1000);
    },[]);

    // THE SAME CODE WRITTEN WITH ARROW FUNCTIONS AND WITHOUT COMMENTS 
    // useEffect(() => {
    //     setInterval(() =>setTime(new Date()), 1000);
    // }, []);

    return <h2>It is {time.toString()}</h2>;

};

export default ClockComponent;


function SecondsCounter(){
    // [currentStateValueVariable* , setStateFunction] = useState (inital value)
    // *currentStateValueVariable will be = inital value during the 1st render
    const [seconds, setSeconds] = useState(0);

    // useEffect is used to: execute some code after the component renders 
    // useEffect( setup function with Effect's logic , dependencies)
    // setting up useEffect - to update the value of seconds
    useEffect( () => {

        // We start by putting the logic of setInterval into a variable we call "interval"
        // - setInterval is a function that calls another function at a set interval, e.g. every X (mili) seconds
        const interval = setInterval(() => {
            // the function we are calling is our setSeconds (setState) function which updates the variable "seconds"
            // - we are giving setSeconds an updater function as its only arguement
            // -> this means its Equal to the  callback function which the value of th current 
            setSeconds((currentSecondsValue) => currentSecondsValue+1);
        }, 1000);
        
        // the clearInterval() function cancels a timed, repeating action which was previously established by a call to setInterval().
        // its Parameter = The identifier of the repeated action you want to cancel. 
        // This ID was returned by the corresponding call to setInterval().

        // QUESTION: WHY ARE WE RETURNING THE CLEAR INTERVAL + WHY IS IT BEING RETURNED WITH AN ARROW FUNCTION 
        // this is done to avoid data leakage? if this was not done the "interval" variable would have all the previous state calculations saved within it? 
        // arrow function is used why?
        return () => clearInterval(interval);
    // dependencies: the setSeconds is set as a dependency because..... 
    }, [setSeconds]);

    const six = Math.floor(seconds/100000)%10;
    const five = Math.floor(seconds/10000)%10;
    const four = Math.floor(seconds/1000)%10;
    const three = Math.floor(seconds/100)%10;
    const two = Math.floor(seconds/10)%10;
    const one = Math.floor(seconds/1%10)

    console.log(six, five, four, three, two, one)

    return(
        <div className="myCounter">
            <div className="clock">±</div>
            <div className="six">{six}</div>
            <div className="five">{five}</div>
            <div className="four">{four}</div>
            <div className="three">{three}</div>
            <div className="two">{two}</div>
            <div className="one">{one}</div> 
        </div>
        );
};


export {SecondsCounter}