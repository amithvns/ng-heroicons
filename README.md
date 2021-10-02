# ng-heroicons

[![npm version core](https://img.shields.io/npm/v/@amithvns/ng-heroicons/latest?label=%40amithvns%2Fng-heroicons&style=flat-square)](https://www.npmjs.com/package/@amithvns/ng-heroicons)

## Installing

Run `npm install @amithvns/ng-heroicons`\
or
Run `yarn install @amithvns/ng-heroicons`

## Adding to an Angular project

Add the **IconsModule** to your AppModule.

```
IconsModule.withIcons({
  ...ICONS_OUTLINE, 
  ...ICONS_SOLID
})
```

## Basic Usage
Outline icons
`<ng-heroicon name='user' class="h-6 w-6 text-gray-500"></ng-heroicon>`

Solid icons
`<ng-heroicon name='user-solid' class="h-6 w-6 text-gray-500"></ng-heroicon>`
