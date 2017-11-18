# jquey-windows-combobox
#### Current Version 1.1.0

## Welcome
jquey-windows-combobox is provide combobox like microsoft windows for jQuery.

## How to use
clone or download zip.  
show **sample.html** and **sample_style.html** on your browser.

## Image
![sample_image](https://raw.githubusercontent.com/melt-snow/jquey-windows-combobox/master/sample.png)
![sample_style_image](https://raw.githubusercontent.com/melt-snow/jquey-windows-combobox/master/sample_style.png)

## Common Setting 

    <head>
        <link rel="stylesheet" href="jquery-windows-combobox.css">
    </head>
     
    <body>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="jquery-windows-combobox.js"></script>
    </body>

## sample:default

    <div class="combobox">
        <input type="text" name="zodiac_sign" title="zodiac_sign" size="20" placeholder="Please select zodiac sign">
        <select title="seiza">
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
        </select>
    </div>
     
    <script>
        jQuery('.combobox').combobox();
    </script>

## sample:fix-font-size

    <style>
        /* if you want set font-size */
        .sample-fix-font-size > input {
            /* fix to select */
            font-size: 50px;
        }
    </style>
     
    <div class="combobox sample-fix-font-size">
        <input type="text" name="zodiac_sign" title="zodiac_sign" size="20" placeholder="Please select zodiac sign">
        <select title="seiza">
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
        </select>
    </div>
     
    <script>
        jQuery('.combobox').combobox();
    </script>
      
#### sample:fix-margin-padding

    <style>
        /* if you want set input margin and padding */
        .sample-fix-margin-padding > input {
            /* fix to select */
            margin: 5px 10px 15px 20px;
            padding: 28px 21px 14px 7px;
        }
    </style>
     
    <div class="combobox sample-fix-margin-padding">
        <input type="text" name="zodiac_sign" title="zodiac_sign" size="20" placeholder="Please select zodiac sign">
        <select title="seiza">
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
        </select>
    </div>
     
    <script>
        jQuery('.combobox').combobox();
    </script>
      
## sample:align-right

    <style>
        /* if you want set align right */
        .sample-align-right > input {
            /* fix to input and select */
            text-align: right;
        }
    </style>
     
    <div class="combobox sample-align-right">
        <input type="text" name="test2" title="sample" size="20" placeholder="Please select sample">
        <select title="sample">
            <option value="sample1">sample1</option>
            <option value="sample2">sample2</option>
            <option value="sample3">sample3</option>
            <option value="sample4">sample4</option>
            <option value="sample5">sample5</option>
        </select>
    </div>
     
    <script>
        jQuery('.combobox').combobox();
    </script>

## sample:multiple

    <div class="combobox sample-multiple">
        <input type="text" name="zodiac_sign" title="zodiac_sign" size="20" placeholder="Please select zodiac sign">
        <select title="seiza">
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
        </select>
    </div>
    <div class="combobox sample-multiple sample-align-right">
        <input type="text" name="test2" title="sample" class="sample2" size="20" placeholder="Please select sample">
        <select title="sample">
            <option value="sample1">sample1</option>
            <option value="sample2">sample2</option>
            <option value="sample3">sample3</option>
            <option value="sample4">sample4</option>
            <option value="sample5">sample5</option>
        </select>
    </div>
     
    <script>
        jQuery('.combobox').combobox();
    </script>

## sample:multiple float

    <style>
        /* if you want side-by-side */
        .sample-multiple-float {
            float: left;
        }
    </style>
     
    <div class="combobox sample-multiple-float  sample-align-right">
        <input type="text" name="zodiac_sign" title="zodiac_sign" size="20" placeholder="Please select zodiac sign">
        <select title="seiza">
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
        </select>
    </div>
    <div class="combobox sample-multiple-float">
        <input type="text" name="test2" title="sample" size="20" placeholder="Please select sample">
        <select title="sample">
            <option value="sample1">sample1</option>
            <option value="sample2">sample2</option>
            <option value="sample3">sample3</option>
            <option value="sample4">sample4</option>
            <option value="sample5">sample5</option>
        </select>
    </div>
     
    <script>
        jQuery('.combobox').combobox();
    </script>
