##### HTML READ ME

## HTML EXAMPLES

## The Div element
### The div element define a section ord division in Html.
```HTML

<div>
    
    <h2>THis is div element</h2>

</div>
```

## The Anchor Tag

### The anchor tage represents the beginnig and the end of a hypetext link.
```HTML
<a href="anotherpage.html#name">Linktext</a>
```

## Boilerplate
### is an HTML, CSS and/or JavaScript template (or boilerplate) for creating HTML5 websites with cross-browser capability.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Js Reviewn Deliverable</h1>
    <div class="container"></div>
    <script src="problem-solving.js"></script>
</body>
</html>
```


# HTML FORMS
The Html <form> element is used to creat an Html form to collect user information through various elements.

```HTML
<form action="results.html" method="GET" enctype="multipart/form-data">
    <div>
        <label for="name">Name</label>
        <input id="name" type="text" name="name" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email"  required>
    </div>
    <div>
        <label for="age">Age</label>
        <input type="numbers" name="age" id="age" min="1" max="200" required>
    </div>
    
</form>
```

## The Input Tag Element
The input tag is a single line tex input field containing many 'types' of inputs, below are several types of input tags.

```HTML

<input type="reset">
<input type="search">
<input type="submit" name="">
<input type="button" id="" name="">
<input type="checkbox" name="" required>

```


## The Label Tag

The label tag defines a label for several purposes in several elements below are examples of a label tag.

```HTML
<input type="checkbox">
<input type="color">
<input type="email">
<input type="file">
<input type="month">
<input type="password">
<input type="radio">
<input type="search">
<input type="text">
<input type="url">

```
## Bootstrap

 Bootstrap is the leading framework for building responsive sites, with CDN and templates.
 ```HTML
-CSS tag for Bootstrap- 

-make sure it goes above the refferenced css file, or things will get funky.

 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

 JS tags for Bootstrap

- like the CSS Bootstrap Tag make sure the JS Bootstrap reference tag also stays about the referenced .js script tag or it will not work.

 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
```