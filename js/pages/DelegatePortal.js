export class DelegatePortal {
    constructor(authService) {
        this.auth = authService;
    }

    async renderDashboard(elementId) {
        if (!this.auth.isAuthenticated()) {
            window.location.href = '/login.html';
            return;
        }

        const element = document.getElementById(elementId);
        const user = this.auth.user;

        element.innerHTML = `
            <div class="dashboard">
                <h2>Welcome, ${user.name}!</h2>
                <div class="dashboard-content">
                    <div class="committee-info">
                        <h3>Your Committee</h3>
                        <!-- Add committee details -->
                    </div>
                    <div class="resources">
                        <h3>Resources</h3>
                        <!-- Add downloadable resources -->
                    </div>
                </div>
            </div>
        `;
    }
}