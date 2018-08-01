

# Devmind Vigilance

> A simple file watcher... For the remote 👀

[![Maintainability](https://api.codeclimate.com/v1/badges/d2fcf73be12a5b16234c/maintainability)](https://codeclimate.com/github/LukasMeine/vigilance/maintainability)
[![Maintainability](https://scrutinizer-ci.com/g/LukasMeine/vigilance/badges/build.png?b=master)](https://scrutinizer-ci.com/g/LukasMeine/vigilance/inspections/8fe9c318-a4bd-4158-8cda-f538c8cbaac5/log)
![Downloads](https://img.shields.io/npm/dt/devmind-vigilance.svg)


## What does this project do?

Basically it checks periodically if there are any changes on your remote git repository. If it does, it will auto-pull them, thus keeping your folder always up to date. You can use it on a development server, so your developers can see their changes instantly, for example.

## Instalation
```
npm install -g devmind-vigilance
```  
## Usage
```
devmind-vigilance --path /path/to/your/git/folder
```
