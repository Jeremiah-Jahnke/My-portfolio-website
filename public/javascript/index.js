import { ParticleBlobs } from "./modules/blobs.js";
import { Extras } from "./modules/extras.js";
import { githubRepo } from "./modules/github.js";

const particleBlobs = new ParticleBlobs("blobs-canvas");
const extras = new Extras();
const github = new githubRepo();

github.fetchRepos().then(async (repos) => {
    for (const repo of repos) {
        const repoElement = await github.createRepoElement(repo);
        document.querySelector(".carousel").appendChild(repoElement);
    }
});

extras.addAnimation(() => {
    extras.startCarousel();
});
