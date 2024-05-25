function calculateVolume(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        };
    };
}

const volumeCalculator = calculateVolume;


const boxVolume = volumeCalculator(5)(3)(2);
console.log("Volume of the box:", boxVolume);
