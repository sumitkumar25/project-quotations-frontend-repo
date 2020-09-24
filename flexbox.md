# Flex Box Model

## Basic and Terminology

### Parent Properties or flex container

1. Display

    

``` css
        {
            display: flex | inline-flex
        }
```

2. Flex Direction

``` css
.flex-container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

3. Flex wrap

   

``` css
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

4. Flex wrap

    

   Shorthand for flex-direction and flex-wrap

``` css
.container {
    flex-flow: column wrap;
}
```

5. Justify Content  

   Alignment across main axis.   

6. Align items

   Alignment across cross axis. Its justify content along cross axis.

7. safe and unsafe

   Using safe ensures that however you do this type of positioning, you can’t push an element such that it renders off-screen
