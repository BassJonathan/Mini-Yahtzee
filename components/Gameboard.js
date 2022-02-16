import React, { useState, useEffect } from "react";
import { Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

//Game Constants
let board = [];
let nbrSum = [0, 0, 0, 0, 0, 0];
let nbrSelectPossible = false;
let diceSelectPossible = false;
let throwPossible = true;
let getBonus = false;
let gameOver = false;
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const SUM_FOR_BONUS = 63;
const BONUS = 35;

export default function Gameboard() {

    //State Variables
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [sum, setSum] = useState(0);
    const [status, setStatus] = useState('');
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [usedNbrs, setUsedNbrs] = useState(new Array(6).fill(false));

    //Initialize Dices
    const diceRow = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
        diceRow.push(
            <Pressable
                key={"row" + i}
                onPress={() => selectDice(i)}
            >
                <MaterialCommunityIcons
                    name={board[i]}
                    key={"row" + i}
                    size={50}
                    color={selectedDices[i] ? "black" : "steelblue"}
                />
            </Pressable>
        );
    }

    //Select dices
    function selectDice(i) {
        if (diceSelectPossible) {
            let dices = [...selectedDices];
            dices[i] = selectedDices[i] ? false : true;
            setSelectedDices(dices);
        } else (
            setStatus("You have to throw dices first.")
        )
    }

    //Throw dices
    function throwDices() {
        if (throwPossible || !gameOver) {
            for (let i = 0; i < NBR_OF_DICES; i++) {
                if (!selectedDices[i]) {
                    let randomNumber = Math.floor(Math.random() * 6 + 1);
                    board[i] = 'dice-' + randomNumber;
                }
            }
            setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
        } else {
            newGame();
        }
    }

//--------------------- NUMBERS ---------------------

    //Initialize Numbers
    const nbrRow = [];
    for (let i = 0; i < 6; i++) {
        nbrRow.push(
            <View style={styles.numbers}>
                <Text style={styles.nbrSum}>{nbrSum[i]}</Text>
                <Pressable
                    key={"nbrRow" + i}
                onPress={() => useNbr(i)}
                >
                    <MaterialCommunityIcons
                        name={'numeric-' + (i + 1) + '-circle'}
                        key={"nbrRow" + i}
                        size={35}
                    color={usedNbrs[i] ? "black" : "steelblue"}
                    />
                </Pressable>
            </View>
        );
    }

    //Use number
    function useNbr(i) {
        let nbrs = [...usedNbrs];
        if (nbrSelectPossible && !nbrs[i]) {
            nbrs[i] = true;
            setUsedNbrs(nbrs);
            console.log('Dice Index: ' + i);
            var tempSum = 0;
            for (let x = 0; x < diceRow.length; x++) {
                var diceVal = parseInt(board[x].match(/(\d+)/)[0]);
                if (diceVal - 1 == i) {
                    tempSum += diceVal;
                }
            }
            nbrSum[i] = tempSum;
            setSum(sum + parseInt(tempSum));
            setSelectedDices(new Array(NBR_OF_DICES).fill(false));
            setNbrOfThrowsLeft(3);
        } else if (nbrs[i]) {
            setStatus("You already selected points for " + (i + 1));
        }
    }

    //Check after each dice throw
    useEffect(() => {
        if (nbrOfThrowsLeft === 0) {
            setStatus('Select a number.');
            throwPossible = false;
            nbrSelectPossible = true;
            //Reset through useNbr() function
        } else if (nbrOfThrowsLeft < NBR_OF_THROWS) {
            setStatus('Throw again or select a number');
            throwPossible = true;
            nbrSelectPossible = true;
            diceSelectPossible = true;
        } else if (nbrOfThrowsLeft === NBR_OF_THROWS && !usedNbrs.every(x => x === true)) {
            setStatus('Throw the dices.');
            throwPossible = true;
            nbrSelectPossible = false;
            diceSelectPossible = false;
        } else if (nbrOfThrowsLeft === NBR_OF_THROWS && usedNbrs.every(x => x === true)) {
            setStatus('Game over! All points selected.');
            throwPossible = false;
            nbrSelectPossible = false;
            gameOver = true;
        }
    }, [nbrOfThrowsLeft]);

    function checkBonus() {
        if (sum >= SUM_FOR_BONUS) {
            getBonus = true;
            return ("You got the Bonus!")
        } else {
            return ("You are " + (SUM_FOR_BONUS - sum) + " points away from bonus.");
        }
    }

    function newGame() {
        gameOver = false;
        setSum(0);
        setUsedNbrs(new Array(6).fill(false));
        nbrSum = [0, 0, 0, 0, 0, 0];
        setNbrOfThrowsLeft(3);
        nbrSelectPossible = true;
        diceSelectPossible = true;
        throwPossible = true;
        getBonus = false;
        throwDices();
    }

    return(
        <View style={styles.gameboard}>
            <View style={styles.flex}>{diceRow}</View>
            <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
            <Text style={styles.gameinfo}>{status}</Text>
            <Pressable style={styles.button}
                onPress={() => throwDices()}>
                <Text style={styles.buttonText}>
                    {gameOver ? 'New Game' : 'Throw dices'}
                </Text>
            </Pressable>
            <Text style={styles.gameinfo}>Total: {getBonus ? (sum + BONUS) : sum }</Text>
            <Text style={styles.gameinfo}>{checkBonus()}</Text>
            <View style={styles.flex}>{nbrRow}</View>
        </View>
    )
};