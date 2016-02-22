# Three Sixty Slider with Pointers

## General
Link images together to create three sixty degrees feel as well as 'pointers' to add detailed information to images. Great for products. Uses jQuery and jQuery UI Slider.

## Structure

```sh
 |-- js
        |-- en-three-sixty.js
        |-- jquery-ui.js
        |-- jquery-2-1-3.min.js
 |-- css
        |-- en-three-sixty.css
```

## Options

| Property      | Type          | Default       | Description   |
| ------------- | ------------- | ------------- |-------------- |
| background    | string        | transparent   | Background color of images (works only for .PNGs)  |
| addPointers   | boolean       | false         | If false, no pointers will show, if true allows to add pointers |
| pointers       | string       | -         | Enters suboption for pointers that will be added |
| pointers.background       | string       | #3DADFF         | Background color of pointer dots |
| pointers.detailsbackground       | string       | #292929         | Background color of pointer details on hover |
| pointers.color       | string       | #fff         | Font color of pointer details on hover |
| pointers.width       | string       | 25px        |  Width of pointers |
| pointers.height       | string       | 25px        | Height of pointers |
| pointers.pointerX       | string       | -         | X being the number of the pointer. By default none are created, if you add a pointer you must specificy pointerX (Eg. pointer1) |
| pointers.pointerX.top       | string       | -         | X being the number of the pointer. You must specificy pointerX top and/or left position (Eg. top : '50px') |
| pointers.pointerX.left       | string       | -         | X being the number of the pointer. You must specificy pointerX top and/or left position (Eg. left : '150px') |

## Usage

###Initialize a slider with defaults

Wrap images in `<div>` with class `"en-wrap"`

####HTML
```sh
<div class="en-wrap">
<img src="img/Photo 4.png" class="three-sixty" />
</div>
```

####JS

```sh
$('.three-sixty').threeSixty();
```

###Initialize a slider with one pointers

Wrap in `<div>` with class `"en-wrap"`
Add `<ul>` with class `"pointers"`

####HTML
```sh
<div class="en-wrap">
<ul class="pointer"><li>Lorem ipsum dolor sit amet, sea cu vidisse facilis maluisset.</li></ul>
<img src="img/Photo 4.png" class="three-sixty" />
</div>
```

####JS

```sh
$('.three-sixty').threeSixty({
	pointers: {
		pointer1:{
				top:	'10px',
				left:	'80px',
			},
	addPointers: 'true'
});
```

## Demos
Unzip and open demo.html

Demo links coming soon.

## TODO
In process of adding a loader.

## Credits

Images for Demo provided by **Robin Misener (robinmisener09@gmail.com)**
