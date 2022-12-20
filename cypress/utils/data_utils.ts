/*
Copyright © 2021 the Konveyor Contributors (https://konveyor.io/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import * as faker from "faker";

export function getFullName(): string {
    // returns full name made up of first name, last name and title
    return faker.name.findName();
}

export function getEmail(): string {
    // returns a random email address
    return faker.internet.email();
}

export function getDescription(): string {
    // returns a sentence with default word count randomly in between 3 and 10
    return faker.lorem.sentence();
}

export function getRandomWord(charLength: number): string {
    // returns a word of specified charLength
    return randomWordGenerator(charLength);
}

export function getRandomWords(numberOfWords: number): string {
    // returns random words separated by space
    return faker.lorem.words(numberOfWords);
}

export function getRandomNumber(min = 1111, max = 5555): number {
    // returns a random number between range min to max
    return Math.floor(Math.random() * (max - min) + min);
}

export function getProjectName(): string {
    // returns a new random application name
    let random_word = getRandomWords(1);
    let random_num = getRandomNumber(1, 200);
    return random_word + random_num;
}

export function randomWordGenerator(length: number): string {
    let generatedWord = "";
    const charsToUse = "aAbBcCdDeEfFgGhHiIjJkKlLmNnoOpPqQrRsStTuUvVwWxXyYzZ";
    for (let i = 0; i < length; i++) {
        generatedWord += charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
    }
    return generatedWord;
}
