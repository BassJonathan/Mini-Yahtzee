# Mini-Yahtzee

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">

  <h2 align="center">Mini-Yahtzee</h2>
  <h3 align="center"> A simple dice game with the core functionality of Yahtzee</h3>

  <p align="center">
    Assignment for the course "Introduction to Mobile Services" @OAMK.
    <br />
    <br />
    <a href="https://github.com/BassJonathan/Mini-Yahtzee"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/BassJonathan/Mini-Yahtzee/issues">Report Bug</a>
    ·
    <a href="https://github.com/BassJonathan/Mini-Yahtzee/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

# Table of Contents
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>

  </li>
  <li><a href="#project-setup">Project setup</a></li>
  <li>
    <a href="#running-the-project">Running the project</a>
  </li>
  <li><a href="#fixes-for-common-issues">Fixes for common issues</a></li>
  <li><a href="#license">License</a></li>

</ol>



<!-- ABOUT THE PROJECT -->
# About The Project
Assignment for the lecture "Introduction to Mobile Services" for the fourth semester abroad at University of Applied Sciences in Oulu, Finland. The application is a basic version of the dice game Yahtzee. The aim of the game is to achieve the highest possible totals for all the numbers on the dice and, if possible, to get the bonus. To do this, you can throw the dice up to three times with the help of the button. To exclude dice from the second or third roll, they can be selected. After a maximum of three rolls, a number must be selected in the lower area of the screen. The small number above the round icon shows the total. The desired number can also be selected after the first or second throw. To receive the bonus of 30 points, the total sum of the numbers must be at least 63. How many points are still missing until the bonus can be read from the screen. After all numbers have been selected, the final score is displayed. To restart the game, simply click on the button again.

## Built with:

* [React Native](https://reactnative.dev)


# Project setup
The project was created using the Expo CLI. Installation instructions can be found [here](https://reactnative.dev/docs/environment-setup).

# Running the project
To run the project the following command can be used:
```
npm start
```
After the Metro Bundler has started you can choose from the following commands:
```
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
```
Choose your system or os and you are ready to go.

# Fixes for common issues
The following list contains frequent issues and their fixes and will be updated during development.
## No connection to the Expo Go app
Sometimes the connection to the Expo Go app via the LAN can fail due to security limitations. To avoid the issue, open the developer tools after the Metro Bundler has started by pressing
```
d
```
Then select "Tunnel" above the QR-code. This creates a tunnel connection that bypasses the security settings and enables a stable but slower connection.

<!-- LICENSE -->

# License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/BassJonathan/Mini-Yahtzee.svg?style=for-the-badge
[contributors-url]: https://github.com/BassJonathan/Mini-Yahtzee/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BassJonathan/Mini-Yahtzee.svg?style=for-the-badge
[forks-url]: https://github.com/BassJonathan/Mini-Yahtzee/network/members
[stars-shield]: https://img.shields.io/github/stars/BassJonathan/Mini-Yahtzee.svg?style=for-the-badge
[stars-url]: https://github.com/BassJonathan/Mini-Yahtzee/stargazers
[issues-shield]: https://img.shields.io/github/issues/BassJonathan/Mini-Yahtzee.svg?style=for-the-badge
[issues-url]: https://github.com/BassJonathan/Mini-Yahtzee/issues
[license-shield]: https://img.shields.io/github/license/BassJonathan/Mini-Yahtzee.svg?style=for-the-badge
[license-url]: https://github.com/BassJonathan/Mini-Yahtzee/blob/master/LICENSE