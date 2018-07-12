# webgme-uml

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/documentation-wiki-blue.svg?style=flat-square)](https://github.com/finger563/webgme-uml/wiki)
[![npm](https://img.shields.io/npm/v/webgme-uml.svg)](https://www.npmjs.com/package/webgme-uml)
[![npm](https://img.shields.io/npm/dm/webgme-uml.svg)](https://www.npmjs.com/package/webgme-uml)
[![npm](https://img.shields.io/npm/dt/webgme-uml.svg)](https://www.npmjs.com/package/webgme-uml)

![uml.collaborative-design.org](https://img.shields.io/website-up-down-green-red/https/uml.collaborative-design.org/profile/login.svg?label=uml.collaborative-design.org)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/finger563)

This repository contains a representation of UML class diagrams for
creating and synthesizing code from UML Class Diagrams created in
WebGME.

An example ULM class diagram might look like:

![Simple Class Diagram](./img/exampleClassDiagram.png)

To generate c++ code from the UML class diagram, run the CodeGenerator
Plugin.

## Installation
First, install the webgme-uml following:
- [NodeJS](https://nodejs.org/en/) (v4.x.x recommended)
- [MongoDB](https://www.mongodb.com/)

Second, start mongodb locally by running the `mongod` executable in your mongodb installation (you may need to create a `data` directory or set `--dbpath`).

Then, run `webgme start` from the project root to start . Finally, navigate to `http://localhost:8888` to start using webgme-uml!
