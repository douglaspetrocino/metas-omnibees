// Omnibees Roadmap App
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Set last update date
    document.getElementById('last-update').textContent = new Date().toLocaleDateString('pt-BR');

    // Calculate and display summary stats
    updateSummary();

    // Render initial view
    renderProducts('meta1');
    renderBacklog();

    // Setup event listeners
    setupEventListeners();
}

function updateSummary() {
    let totalItems = 0;
    let meta1Count = 0;
    let meta2Count = 0;
    let meta3Count = 0;
    let futureCount = 0;

    // Count items in each meta
    Object.keys(roadmapData.priorizados).forEach(meta => {
        Object.keys(roadmapData.priorizados[meta]).forEach(product => {
            const items = roadmapData.priorizados[meta][product];
            const count = items.length;
            totalItems += count;

            switch(meta) {
                case 'meta1': meta1Count += count; break;
                case 'meta2': meta2Count += count; break;
                case 'meta3': meta3Count += count; break;
                case 'future': futureCount += count; break;
            }
        });
    });

    // Add backlog items
    totalItems += roadmapData.naoPriorizados.length;

    // Animate numbers
    animateNumber('total-items', totalItems);
    animateNumber('meta1-count', meta1Count);
    animateNumber('meta2-count', meta2Count);
    animateNumber('meta3-count', meta3Count);
    animateNumber('future-count', futureCount);
}

function animateNumber(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 1000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function renderProducts(meta) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const metaData = roadmapData.priorizados[meta];

    Object.keys(products).forEach(productKey => {
        const product = products[productKey];
        const items = metaData[productKey] || [];

        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.product = product.key;

        card.innerHTML = `
            <div class="product-header">
                <span class="product-name">
                    <span>${product.icon}</span>
                    ${product.name}
                </span>
                <span class="product-badge">${items.length} itens</span>
            </div>
            <div class="product-items">
                ${items.length > 0
                    ? items.map(item => `
                        <div class="item ${item.finishing ? 'finishing' : ''} ${item.technical ? 'technical' : ''}">
                            ${item.text.replace(' (terminar)', '')}
                        </div>
                    `).join('')
                    : '<div class="item-empty">Nenhum item nesta meta</div>'
                }
            </div>
        `;

        grid.appendChild(card);
    });
}

function renderBacklog() {
    const grid = document.getElementById('backlog-grid');
    grid.innerHTML = '';

    roadmapData.naoPriorizados.forEach((item, index) => {
        const backlogItem = document.createElement('div');
        backlogItem.className = 'backlog-item';
        backlogItem.style.animationDelay = `${index * 0.05}s`;

        const teamColor = item.team === 'Beehive' ? 'var(--beehive)' : 'var(--beehive-ui)';

        backlogItem.innerHTML = `
            <div class="backlog-icon" style="background: ${teamColor}">
                ${item.team === 'Beehive' ? '🔧' : '🎨'}
            </div>
            <div class="backlog-content">
                <div class="backlog-team">${item.team}</div>
                <div class="backlog-title">${item.text}</div>
            </div>
        `;

        grid.appendChild(backlogItem);
    });
}

function setupEventListeners() {
    // Meta tabs
    const metaTabs = document.querySelectorAll('.meta-tab');
    metaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            metaTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts(tab.dataset.meta);
        });
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.btn-filter');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const priorizadosSection = document.getElementById('priorizados-section');
            const backlogSection = document.getElementById('backlog-section');

            switch(filter) {
                case 'all':
                    priorizadosSection.classList.remove('hidden');
                    backlogSection.classList.remove('hidden');
                    break;
                case 'priorizados':
                    priorizadosSection.classList.remove('hidden');
                    backlogSection.classList.add('hidden');
                    break;
                case 'nao-priorizados':
                    priorizadosSection.classList.add('hidden');
                    backlogSection.classList.remove('hidden');
                    break;
            }
        });
    });
}

// Export for potential future use
window.OmnibeesRoadmap = {
    data: roadmapData,
    products: products,
    renderProducts,
    renderBacklog
};
