/*global document*/

import {ImagePreloader} from 'image-preloader/ImagePreloader';

let preloader = new ImagePreloader(document.getElementsByTagName('img'));
preloader.load({
    complete() {
        console.log('Hell yeah!');
    }
});