import React, { useState, useEffect } from "react";
import { Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

//Game Constants
let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const SUM_FOR_BONUS = 63;

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
                    color={getDiceColor(i)}
                />
            </Pressable>
        );
    }

    //Color selected dices differently
    function getDiceColor(i) {
        if (board.every((val, i, arr) => val === arr[0])) { //every() checks if all dices are the same number
            return "orange";
        } else {
            return selectedDices[i] ? "black" : "steelblue";
        }
    }

    //Select dices
    function selectDice(i) {
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
    }

    //Throw dices
    function throwDices() {
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-' + randomNumber;
            }
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
    }

//--------------------- NUMBERS ---------------------

    //Initialize Numbers
    const nbrRow = [];
    for (let i = 0; i < 6; i++) {
        nbrRow.push(
            <View style={styles.numbers}>
                <Text style={styles.nbrSum}>0</Text>
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

    function useNbr(i) {
        let nbrs = [...usedNbrs];
        nbrs[i] = true;
        setUsedNbrs(nbrs);
    }

    //Check for winner
    function checkWinner() {
        setStatus('Not defined yet!')
    }

    //Check after each dice throw
    useEffect(() => {
        checkWinner();
        if (nbrOfThrowsLeft === NBR_OF_THROWS) {
            setStatus('Game has not started');
        }
        if (nbrOfThrowsLeft < 0 ) {
            setNbrOfThrowsLeft(NBR_OF_THROWS-1);
        }
    }, [nbrOfThrowsLeft]);


    return(
        <View style={styles.gameboard}>
            <View style={styles.flex}>{diceRow}</View>
            <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
            <Text style={styles.gameinfo}>{status}</Text>
            <Pressable style={styles.button}
                onPress={() => throwDices()}>
                <Text style={styles.buttonText}>
                    Throw dices
                </Text>
            </Pressable>
            <Text style={styles.gameinfo}>Total: {sum}</Text>
            <Text style={styles.gameinfo}>You are {SUM_FOR_BONUS - sum} points away from bonus.</Text>
            <View style={styles.flex}>{nbrRow}</View>
        </View>
    )

};