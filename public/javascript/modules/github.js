export class githubRepo {
    /**
     * Fetches the public repositories from my github account.
     * @returns {Promise} The promise object representing the public repositories.
     */
    async fetchRepos() {
        const response = await fetch("https://api.github.com/users/MrLolegic/repos");
        return response.json();
    }

    /**
     * Creates a new repository element.
     * @param {Object} repo - The repository object.
     * @returns {HTMLElement} The newly created repository element.
     */
    async createRepoElement(repo) {
        const repoItem = document.createElement("div");
        repoItem.classList.add("carousel-item");
    
        const imageUrl = `https://opengraph.githubassets.com/4405d552c7fe577fe055521428a37d636abfeb9c18c564716e261e05d37b36d6/MrLolegic/${repo.name}`;    
        const image = document.createElement("img");
        image.src = imageUrl || "/images/coming-soon.png";
        image.alt = repo.name;
    
        const carouselText = document.createElement("div");
        carouselText.classList.add("carousel-text");
    
        const projectName = document.createElement("h3");
        projectName.classList.add("project-name");
        projectName.textContent = repo.name;
    
        const description = document.createElement("p");
        description.textContent = repo.description || "No description provided";
    
        const projectButtons = document.createElement("div");
        projectButtons.classList.add("project-buttons");
    
        const githubLink = document.createElement("a");
        githubLink.href = repo.html_url;
        githubLink.target = "_blank";
        githubLink.innerHTML = '<i class="bi bi-github"></i>';
    
        projectButtons.appendChild(githubLink);
        carouselText.appendChild(projectName);
        carouselText.appendChild(description);
        carouselText.appendChild(projectButtons);
        repoItem.appendChild(image);
        repoItem.appendChild(carouselText);
    
        return repoItem;
    }    
}
