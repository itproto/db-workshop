# Main References
- https://github.com/phodal/microfrontends/blob/master/english.md
- Books
  - Microfrontend in Action (Tractor store) https://the-tractor.store/
    -  https://learning.oreilly.com/library/view/micro-frontends-in/9781617296871/
    -  https://github.com/naltatis/micro-frontends-in-action-code

  - Bootstrap Micro
- Courses
  - Pluralsight 
  - Udemy
- Ppl
  - https://martinfowler.com/articles/micro-frontends.html Cam Jackson
  - https://github.com/micro-frontends-demo

# Arcjitectures/Actors
- PageService
https://medium.com/@amirilovic/web-microfrontends-introduction-451f72e68c8c

## Reviewed


# WHY?
- check microservices in analogy
  
  [logo](assets/deminish-return.png)[Law of Deminishing returns]

# How in general?
- slice vertically by feature teams

# 6 Features

1. Autonomous
2. Team ownership
3. Tech agnostic
4. UserExp
5. ValueDriven
6. MS-driven

# WAYS
> CHECK here https://github.com/phodal/microfrontends/blob/master/english.md
1. Shared runtime
   - web components
   - react/ang comps
   - transclusion?? 
2. Separate runtime
   - MicroApp - links
   - IFRAME

## MicroApp via Links
  - links as communication
  - common design
  - shared controls/navigation/footer
  - (--) UserExp - jump between

## IFRAME
> same page
  - all on one page (vs micro-apps)
  - (++) isolation, no-leaks, support
  - (--) SEO/PERF/Accesability, FIXED SIZE to know in advance(coupling)
  - COMMUNICATION: service-side, postMesage

## MicroApp

## WebComp

