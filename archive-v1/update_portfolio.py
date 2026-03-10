import re

html_path = 'index.html'
css_path = 'style.css'

with open(html_path, 'r') as f:
    html = f.read()

new_main = """    <main class="bento-container">
        <!-- Unified Profile Tile -->
        <article class="bento-tile profile-tile glass-panel">
            <div class="profile-header">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop" alt="Asmit" class="avatar">
                <div class="status-badge-container">
                    <div class="status-btn"><span class="status-dot"></span> Available to Work</div>
                    <button class="resume-btn">Resume <i class="fas fa-download"></i></button>
                </div>
            </div>
            <div class="profile-info">
                <h1 class="portfolio-name">Asmit</h1>
                <h2 class="portfolio-title">I'm a Photography Student</h2>
            </div>
            <div class="profile-tags">
                <span class="tag"><i class="fas fa-map-marker-alt"></i> India</span>
                <span class="tag"><i class="fas fa-language"></i> English & Hindi</span>
                <span class="tag"><i class="fas fa-camera"></i> Photographer</span>
                <span class="tag"><i class="fas fa-graduation-cap"></i> Studio Arts</span>
            </div>
            <div class="profile-actions">
                <a href="#contact" class="action-btn primary"><i class="fab fa-telegram-plane"></i> Telegram Me</a>
                <a href="#contact" class="action-btn secondary"><i class="fab fa-whatsapp"></i> WhatsApp Me</a>
            </div>
        </article>

        <!-- Stats Counter Tiles -->
        <article class="bento-tile stat-tile glass-panel">
            <span class="stat-number" data-target="500">500+</span>
            <span class="stat-label"><i class="fas fa-images"></i> Photos Taken</span>
        </article>
        <article class="bento-tile stat-tile glass-panel">
            <span class="stat-number" data-target="50">50+</span>
            <span class="stat-label"><i class="fas fa-project-diagram"></i> Projects</span>
        </article>
        <article class="bento-tile stat-tile glass-panel">
            <span class="stat-number" data-target="3">03+</span>
            <span class="stat-label"><i class="fas fa-star"></i> Years Exp.</span>
        </article>

        <!-- Quote / Testimonial -->
        <article class="bento-tile quote-tile glass-panel">
            <div class="tile-header-small"><i class="fas fa-comment-dots"></i> Quote Carousel</div>
            <div class="quote-container" id="quote-carousel">
                <blockquote class="quote active" style="font-family: 'Inter', sans-serif;">
                    "Photography is the story I fail to put into words."
                </blockquote>
                <blockquote class="quote" style="font-family: 'Outfit', sans-serif; font-weight: 700;">
                    "Capturing light, creating memories."
                </blockquote>
            </div>
        </article>

        <!-- Image Gallery Rotator -->
        <article class="bento-tile image-rotator-tile glass-panel p-0">
            <div class="tile-header-overlay">
                <i class="fas fa-briefcase"></i>
                <div class="texts">
                    <span class="overlay-title">Works Gallery</span>
                    <span class="overlay-subtitle">Selected Projects</span>
                </div>
            </div>
            <div class="image-rotator" id="gallery-rotator">
                <div class="slide active"></div>
                <div class="slide"></div>
                <div class="slide"></div>
            </div>
            <button class="view-works-btn">View Works</button>
        </article>

        <!-- 3D Gadgets -->
        <article class="bento-tile gadgets-tile glass-panel expandable" id="gadgets-viewer">
            <div class="tile-header-overlay dark-overlay">
                <i class="fas fa-camera-retro"></i>
                <div class="texts">
                    <span class="overlay-title">My Gear</span>
                    <span class="overlay-subtitle">Hardware Arsenal</span>
                </div>
            </div>
            <div class="model-container">
                <model-viewer src="assets/camera.glb" alt="3D Camera Model" auto-rotate rotation-per-second="30deg" camera-controls disable-zoom></model-viewer>
            </div>
        </article>

        <!-- Social Links (Follow Me) -->
        <article class="bento-tile follow-tile glass-panel">
            <div class="tile-header-small"><i class="fas fa-sun"></i> Follow Me</div>
            <div class="social-list">
                <a href="#" class="social-link"><i class="fab fa-twitter"></i> @asmit_photo</a>
                <a href="#" class="social-link"><i class="fab fa-instagram"></i> @asmit_photo</a>
                <a href="#" class="social-link"><i class="fab fa-linkedin"></i> @asmit</a>
            </div>
        </article>

        <!-- Contact/Let's work together -->
        <article class="bento-tile contact-tile glass-panel expandable" id="contact-expand">
            <div class="contact-header">
                <i class="fas fa-crown"></i>
                <h3>Let's Work Together</h3>
                <p>Let's make magic happen together!</p>
            </div>
            <div class="contact-buttons">
                <button class="action-btn primary"><i class="fas fa-envelope"></i> Email Me</button>
            </div>
            <div class="hidden-content form-container">
                <form id="contact-form">
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <textarea placeholder="Message" rows="3" required></textarea>
                    <button type="submit" class="btn-primary">Send Message</button>
                </form>
            </div>
        </article>

        <!-- Music Player -->
        <article class="bento-tile music-tile glass-panel">
            <div class="tile-header-small"><i class="fas fa-music"></i> Playing</div>
            <div class="music-inner">
                <div class="album-art pulse"></div>
                <div class="track-info">
                    <div class="track-name">Editing Flow</div>
                    <div class="artist-name">Lofi Beats</div>
                </div>
                <div class="visualizer">
                    <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
                </div>
            </div>
        </article>

    </main>"""

html = re.sub(r'<main class="bento-container">.*?</main>', new_main, html, flags=re.DOTALL)
with open(html_path, 'w') as f:
    f.write(html)

print("HTML rewritten.")
