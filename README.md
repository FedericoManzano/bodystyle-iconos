# Bodystyle Icon

[![Documentación](https://img.shields.io/badge/bodyicon-v1.1.0-green.svg)](https://bodystyle.000webhostapp.com)
[![Licencia](https://img.shields.io/badge/MIT-1.1.0-blue.svg)](https://github.com/FedericoManzano/bodystyle-iconos/blob/master/LICENCE)

Conjunto de iconos fuente para añadirle a los elementos en las páginas web.


## Contenido :clipboard:

- [Estructura](https://github.com/FedericoManzano/bodystyle-iconos#estructura)
- [Documentación](https://github.com/FedericoManzano/bodystyle-iconos#documentaci%C3%B3n-book)
- [Instalación](https://github.com/FedericoManzano/bodystyle-iconos#instalaci%C3%B3n)
- [Utilización](https://github.com/FedericoManzano/bodystyle-iconos#utilizaci%C3%B3n)
- [Licencia](https://github.com/FedericoManzano/bodystyle-iconos/blob/master/LICENCE)

## Estructura 

- bodystyle-iconos
  - iconos
    - fonts 
      - fuentes. `oet` | `svg` | `ttf` | `woff`
    - bs-iconos.css
    - bs-iconos.min.css
  - node_modules
  - pruebas
  - svg
    - imagenes.`svg`
  - [LICENCE]()
  - [package]()
  - [package.lock]()
  - README


## Documentación :book:

Todo lo referente a los íconos podemos encontrarlo en la documentación de Bodystyle en el siguente enlace.

[bodystyle](https://bodystyle.000webhostapp.com) :books:
[Repositorio](https://bodystyle.000webhostapp.com) :books:

## Instalación

La instalación es a través de el CDN de los archivos de estilo que componen la librería.

### Plantilla

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- META obligatorio para poder utilizar la libreria -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Link con el CDN de los estilos css  -->
        <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/bodystyle-iconos/67ed1347160750e506d5153c8ae523057db50b03/iconos/bs-iconos.min.css">
    </head>
    <body>
        <span class="bs-book"></span>
    </body>
</html>
```

Para descargar el código fuente podemos hacer un clone desde el repositorio.

```bash
    git clone https://github.com/FedericoManzano/bodystyle-iconos
```

## utilización 

Para poder utilizar los íconos simplemente añadimos una etuiqueta `span` al elemento al cual queremos añadirle un ícono y luego al span le agregamos la clase correspondiente a cada uno de los íconos.

### Ejemplo

```html
    <h1>Esto es un H1 <span class="bs-book">&nbsp;</span></h1>
```

## Licencia

[MIT](https://github.com/FedericoManzano/bodystyle-iconos/blob/master/LICENCE) Bodystyle (c) 2020


