// js/components/countdown.js

class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate);
        this.timer = null;
    }

    start(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = this.targetDate - now;

            if (distance < 0) {
                clearInterval(this.timer);
                element.innerHTML = "<div class='countdown-item'><span>Event has started!</span></div>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            element.innerHTML = `
                <div class="countdown-item"><span>${days}</span> days</div>
                <div class="countdown-item"><span>${hours}</span> hours</div>
                <div class="countdown-item"><span>${minutes}</span> minutes</div>
                <div class="countdown-item"><span>${seconds}</span> seconds</div>
            `;
        };

        updateTimer();
        this.timer = setInterval(updateTimer, 1000);
    }
}

// Initialize the countdown timer
document.addEventListener('DOMContentLoaded', () => {
    const countdown = new CountdownTimer('2025-01-18T12:00:00'); // Set your target date here
    countdown.start('countdown');
});