# Transit Flow

This is a Landing Page project that I developed based on a design in Figma.

[Design Link](https://www.figma.com/file/52QdFVCyPScxsZJA9ASVwj/TransitFlow-by-VictorFlow?node-id=0%3A1&t=7eS7sxLfGd9s60pS-1)

# Project Description

Transit Flow is a Landing Page created to showcase a transportation service.
The main objective is to provide users with a clear and informative view of the service, allowing them to understand its features and benefits.
The landing page is designed with a modern and minimalist approach, following Figma design guidelines.

# Problem Solving

The following are the requirements I had to fulfill during the development of the Transit Flow Landing Page:

## Develop web pages and landing pages according to UI/UX designs.

- To fulfill this requirement, I followed the design guidelines and implemented the design using modern web development practices.
- I used REM units during page development, ensuring responsiveness on any screen, from a foldable phone to a 4k monitor.

## Identify possible bugs.

- To fulfill this requirement, I thoroughly tested the site using Chrome DevTools, looking for any errors or issues that may affect the user experience on any screen size.
- I also validated the page using the [W3C Validator](https://validator.w3.org/) to ensure the page has no markup errors.
  ![image](https://user-images.githubusercontent.com/98567681/230235409-44a6f6b7-5097-4a85-a28f-2d100a50f5f4.png)

## Evaluate and improve site performance.

### I used tools like Google PageSpeed and GT Metrix to evaluate and discover how to improve site performance, and employed techniques such as:

- Preloading images and fonts.
- Optimizing and compressing images using sites like [CompressorIO](https://compressor.io/) and [TinyPNG](https://tinypng.com/)
- Using images in WebP format, with a fallback in PNG format if the user's browser doesn't support them.
- Using Photoshop and the HTML "picture" tag to deliver images in the ideal size for mobile devices. A 375x667 screen phone does not need to load a 1920x1080 image.
- Locally hosting fonts.
- Lazy loading images below the fold.
- Minifying and compressing html, css, and javascript files.
- Using The Amazon Cloudfront Content Delivery Network to speed up delivery of page files.

### With the help of these techniques, I achieved the highest performance score on both tests:

### PageSpeed

![pagespeed web dev_analysis_https-transitflow-kenjinakagava-netlify-app_g0z5gjdax1_form_factor=desktop (1)](https://user-images.githubusercontent.com/98567681/230235776-5e3ee5a4-0ecf-439e-86ae-4af8560a4886.png)

### GT Metrix

![image](https://user-images.githubusercontent.com/98567681/230235981-0e9b3363-2900-4938-a2c3-8a299ee467ef.png)

## Manage development environments.

- To fulfill this requirement, I used Git to manage code changes and version control.

## Trabalhar com boas práticas de desenvolvimento.

- To fulfill this requirement, I worked with the BEM methodology in this project, which, along with SASS, facilitates CSS class naming.
- Additionally, I used semantic HTML tags and ARIA attributes, making the site more accessible to people using screen readers.

## Automate processes (whenever possible)

- To fulfill this requirement, I used Netlify to automate the process of file minification and site publishing.

## Documenting development processes

- To fulfill this requirement, I used git commit messages to describe which part of the site I developed/modified in my commit.

# Used Tecnologies

The following technologies were used to develop Transit Flow:

- HTML
- CSS
- SASS (SCSS)
- JavaScript
- Git
- Figma
- Netlify

# Conclusion

Transit Flow is a Landing Page project that demonstrates my ability to develop high-quality websites according to UI/UX defined layouts.
