class Progress {
    constructor(config) {
        this.container = typeof config === 'string' 
            ? document.querySelector(config) 
            : config.container || config;
        
        if (!this.container) {
            throw new Error('Progress: container  not found');
        }
        
        this.progressBar = this.container.querySelector('[data-progress-bar]');
        this.progressCircle = this.container.querySelector('[data-progress-circle]');
        this.wrapper = this.container.querySelector('[data-progress-wrapper]') || this.container;
        
        if (!this.progressBar || !this.progressCircle) {
            throw new Error('Progress:  elements not found');
        }
        
        this.value = 100;
        this.isAnimated = false;
        this.isHidden = false;
        this.circumference = 2 * Math.PI * 50; 
        this.progressBar.style.strokeDasharray = this.circumference;
    }

    setValue(value) {
        value = Math.max(0, Math.min(100, value));
        this.value = value;
        
        const offset = this.circumference * (1 - value / 100);
        this.progressBar.style.strokeDashoffset = offset;
    }

    setAnimated(animated) {
        this.isAnimated = animated;
        if (animated) {
            this.progressCircle.classList.add('spinning');
        } else {
            this.progressCircle.classList.remove('spinning');
        }
    }

    setHidden(hidden) {
        this.isHidden = hidden;
        if (hidden) {
            this.wrapper.classList.add('hidden');
        } else {
            this.wrapper.classList.remove('hidden');
        }
    }

    getValue() {
        return this.value;
    }
}