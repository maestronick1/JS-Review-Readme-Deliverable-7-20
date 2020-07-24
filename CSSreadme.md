#### 
CSS Readme

# Examples of CSS


## The Element Selector




#### The element that selected will follow an opening curly bracket, the styling. This selects and styles all elements #### with the specified name and a closing curly bracket will follow.
```CSS
body {
    text-align: center;
    font-size: 14px
}
```

## The Class Selector

#### The class will select and style the following class with the specified class name. The selector is peceeded by a period.

```CSS

.div-one{
    display:inline;
    height: 200px;
    witdh: 200px;
}
```

## Id Selector

#### The ID Selector will selstc and the following Element with the specified Id name. The Id selecote is preceed by a hashtag

```CSS

#table {
 border: solid 5px black;
 border-top:none;

}
```
# FLEX BOX & GRID
Grid and flexbox. The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.

## Flex Container from HTML
Thouh this example is in HTML Flex container is a good way to manipulate multiple items with flex or grid.
```HTML

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
### Examples of Flex
```CSS
display: flex; activates the flexibilty of Flex. and flex-direction: column; stackes the items vertically from top to bottom;


.flex-container {
  display: flex;
  flex-direction: column;
}
```

### Example of Grid

-Html grid conatainer, a parent elemenet with one or more child elements.

```HTML
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```

# Grid Display Property 
```CSS
   .grid-container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20%
}









