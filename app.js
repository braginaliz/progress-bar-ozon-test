import { Progress } from "./script.js";

document.addEventListener('DOMContentLoaded', function() {
    const progress = new Progress('.container');
    progress.setValue(100);
    const valueInput = document.getElementById('valueInp');
    const animateToggle = document.getElementById('animate');
    const hideToggle = document.getElementById('hide');

    if (valueInput) {
        valueInput.addEventListener('input', function(event) {
            let value = parseInt(event.target.value, 10);
            
            if (isNaN(value)) {
                value = 0;
            }
            
            if (value > 100) {
                value = 100;
                event.target.value = 100;
            } else if (value < 0) {
                value = 0;
                event.target.value = 0;
            }
            
            progress.setValue(value);
        });
    }

    if (animateToggle) {
        animateToggle.addEventListener('change', function() {
            progress.setAnimated(this.checked);
        });
    }
    
    if (hideToggle) {
        hideToggle.addEventListener('change', function() {
            progress.setHidden(this.checked);
        });
    }
    
    window.progressAPI = progress;
});

