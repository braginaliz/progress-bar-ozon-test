document.addEventListener('DOMContentLoaded', function() {
    const progress = new Progress('.container');
    progress.setValue(100);
    const valueInput = document.getElementById('valueInp');
    const animateToggle = document.getElementById('animate');
    const hideToggle = document.getElementById('hide');

    if (valueInput) {
        valueInput.addEventListener('input', function() {
            let value = parseInt(this.value) || 0;
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