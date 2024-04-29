export class ParticleBlobs {
    /**
     * Represents a blob object.
     * @typedef {Object} Blob
     * @property {number} x - The x-coordinate of the blob.
     * @property {number} y - The y-coordinate of the blob.
     * @property {number} radius - The radius of the blob.
     * @property {number} velocityY - The vertical velocity of the blob.
     * @property {string} color - The color of the blob.
     */

    /**
     * Creates a new blob object.
     * @returns {Blob} The newly created blob object.
     */
    createBlob() {
        return {
            x: Math.random() * this.canvas.width,
            y: this.canvas.height,
            radius: Math.random() * 20 + 10,
            velocityY: Math.random() * 2 + 1,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
        };
    }

    /**
     * Updates the position of the blobs.
     */
    updateBlobs() {
        for (let i = 0; i < this.blobs.length; i++) {
            const blob = this.blobs[i];
            blob.y -= blob.velocityY;

            if (blob.y + blob.radius < 0) {
                this.blobs[i] = this.createBlob();
            }
        }
    }

    /**
     * Draws the blobs on the canvas.
     */
    drawBlobs() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const blob of this.blobs) {
            this.ctx.beginPath();
            this.ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = blob.color;
            this.ctx.fill();
        }
    }

    /**
     * Animates the blobs by updating their positions and redrawing them on the canvas.
     */
    animate() {
        this.updateBlobs();
        this.drawBlobs();
        requestAnimationFrame(() => this.animate());
    }

    /**
     * Sets the size of the canvas to match the window size.
     */
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.blobs = [];
        this.colors = [
            "rgba(15, 17, 26, 0.6)",
            "rgba(24, 27, 41, 0.6)",
            "rgba(157, 161, 176, 0.6)",
            "rgba(130, 144, 196, 0.6)",
            "rgba(96, 102, 122, 0.6)",
            "rgba(0, 0, 0, 0.1)",
            "rgba(157, 161, 176, 0.6)",
        ];

        this.setCanvasSize();

        for (let i = 0; i < 10; i++) {
            this.blobs.push(this.createBlob());
        }

        window.addEventListener("resize", () => this.setCanvasSize());

        this.animate();
    }
}
