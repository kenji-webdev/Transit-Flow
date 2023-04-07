# Transit Flow

[EN Version](https://github.com/kenjinakagava/Transit-Flow/blob/master/EN_README.MD)

Este é um projeto de uma Landing Page que desenvolvi seguindo um design no Figma.

[Link do Design](https://www.figma.com/file/52QdFVCyPScxsZJA9ASVwj/TransitFlow-by-VictorFlow?node-id=0%3A1&t=7eS7sxLfGd9s60pS-1)

# Descrição do projeto

Transit Flow é uma Landing Page criada para mostrar um serviço de transporte.
O objetivo principal é fornecer aos usuários uma visão clara e informativa do serviço, permitindo que eles entendam suas características e benefícios.
A página de destino é projetada com uma abordagem moderna e minimalista, seguindo as diretrizes de design do Figma.

# Resolução de problemas

Os seguintes são os requerimentos que tive que cumprir durante o desenvolvimento da Landing Page Transit Flow:

## Desenvolver páginas web e páginas de destino de acordo com os designs de UI / UX.

- Para cumprir esse requerimento, segui as diretrizes de design e implementei o design usando práticas modernas de desenvolvimento web.
- Usei as unidades REM durante o desenvolvimento da página, garantindo responsividade em qualquer tela, de um celular fold até um monitor 4k.

## Identificar possíveis bugs.

- Para cumprir esse requerimento, testei minuciosamente o site usando o Chrome DevTools, procurando por quaisquer erros ou problemas que possam afetar a experiência do usuário em qualquer tamanho de tela.
- Também validei a página usando o [W3C Validator](https://validator.w3.org/) para garantir que a página não tenha erros de marcação.
  ![image](https://user-images.githubusercontent.com/98567681/230235409-44a6f6b7-5097-4a85-a28f-2d100a50f5f4.png)

## Avaliar e melhorar o desempenho do site.

### Usei ferramentas como Google PageSpeed e GT Metrix para avaliar e descobrir como melhorar o desempenho do site, e empreguei técnicas como:

- Pré-carregamento de imagens e fontes.
- Otimização e compressão de imagens, usando sites como [CompressorIO](https://compressor.io/) e [TinyPNG](https://tinypng.com/)
- Utilização de imagens em formato WebP, com um fallback em formato PNG, caso o navegador do usuário não às suporte.
- Uso do Photoshop e da tag html "picture" para a entrega de imagens em tamanho ideal para dispositivos móveis, um celular com tela 375x667 não precisa carregar uma imagem 1920x1080
- Hospedagem local de fontes.
- Lazy loading de imagens abaixo da dobra.
- Minificação e compressão dos arquivos html, css e javascript.
- A Rede de Entrega de Conteúdo Amazon Cloudfront para acelerar a entrega dos arquivos da página.

### Com a ajuda dessas técnicas, consegui a pontuação de desempenho mais alta em ambos os testes:

### PageSpeed

![pagespeed web dev_analysis_https-transitflow-kenjinakagava-netlify-app_g0z5gjdax1_form_factor=desktop (1)](https://user-images.githubusercontent.com/98567681/230235776-5e3ee5a4-0ecf-439e-86ae-4af8560a4886.png)

### GT Metrix

![image](https://user-images.githubusercontent.com/98567681/230235981-0e9b3363-2900-4938-a2c3-8a299ee467ef.png)

## Gerenciar ambientes de desenvolvimento.

- Para cumprir esse requerimento, usei o Git para gerenciar as alterações de código e o controle de versão.

## Trabalhar com boas práticas de desenvolvimento.

- Para cumprir esse requerimento, trabalhei com a metodologia BEM nesse projeto, que junto com o SASS, facilita a nomeação de classes do CSS.
- Além disso fiz uso das tags semânticas do HTML, e atributos ARIA, fazendo com que o site seja mais acessível à pessoas com leitores de tela.

## Automatizar processos (sempre que possível).

- Para cumprir esse requerimento, usei a plataforma Netlify para automatizar o processo de minificação de arquivos e publicação do site.

## Documentar processos de desenvolvimento.

- Para cumprir esse requerimento, utilizei das mensagens de commit do git, onde descrevo qual parte do site eu desenvolvi / modifiquei.

# Tecnologias utilizadas

Segue as tecnologias utilizadas para desenvolver o Transit Flow:

- HTML
- CSS
- SASS (SCSS)
- JavaScript
- Git
- Figma
- Netlify

# Conclusão

Transit Flow é um projeto de uma Landing Page que demonstra minha capacidade de desenvolver sites de alta qualidade de acordo com os layouts definidos pelo UI/UX.
