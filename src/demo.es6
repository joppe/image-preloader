/*global document*/

import {ImagePreloader} from 'image-preloader/ImagePreloader';

let preloader = new ImagePreloader(document.getElementsByTagName('img'));
preloader.start({
    complete() {
        console.log('Hell yeah!');
    }
});