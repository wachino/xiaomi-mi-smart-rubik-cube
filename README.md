This project is deployed using github pages, so you can try a demo:

https://wachino.github.io/xiaomi-mi-smart-rubik-cube/

or watch this video:

https://youtu.be/_OYUJqmsc00

# Xiaomi Mi Smart Rubik Cube

This project contains a code example about how to connect and display Xiaomi Mi Rubik Cube. You can use it as a base library in your project and implement your own application with any functionality you can think of.

## Motivation

I've written a post blog explaining the motivation and how I discovered the information that you can see in this project. You can become inspired by it and apply the ideas to other projects in your mind.

- [Medium post](https://medium.com/@juananclaramunt/xiaomi-mi-smart-rubik-cube-ff5a22549f90)

## Functionality

There are two main files:

- Bluetooth. The main parts from this file are:
  - it allows us to set up the connection with the cube.
  - we subscribe to the notifications.
    So we receive a string of 20 bytes representing the current state for each time that we perform a movement.
- 20th bytes parser.

  - it receives a 20th bytes received from the cube.
  - the output fis an 54-length array of numbers between 1 and 6, representing the 54th faces of the cube pieces. For each array position, the number between 1 and 6 represents the cube color for that position.

![default text](/cube.jpg)

## Local Development

You can run `yarn start` command in order to get this project running in your local computer

## Licence

Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

## Acknowledgment

- http://cube.crider.co.uk/visualcube.php: Used to display the cube state in the web browser.
