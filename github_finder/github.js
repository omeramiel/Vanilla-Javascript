class GitHub {
    constructor() {
        this.clientId = '6a40be00ec16aeeaa263';
        this.clientSecret = '154debe6c9dfa70cc057e1e4b5d5c3615428d656';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}