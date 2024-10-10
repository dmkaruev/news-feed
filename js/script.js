let data = null;

function escapeString(string) {
    var functionTag = function (tag) {
        var symbols = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&#34;'
        };
        return symbols[tag] || tag;
    }
    return string.replace(/[&<>"]/g, functionTag);
}

const renderNews = (categoryId) => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news' + (categoryId ? `/${categoryId}` : ''))
        .then(response => response.json())
        .then((responseData) => {
            data = responseData;

            const bigArticles = data.items.slice(0, 6);
            const bigArticleContainer = document.querySelector('.bigArticles');

            bigArticles.forEach((item) => {
                const template = document.createElement('template');
                const categoryData = data.categories.find((categoryItem) => categoryItem.id === item.category_id);
                const sourceData = data.sources.find((sourceItem) => sourceItem.id === item.source_id);

                template.innerHTML = `
                    <article class="article">
                        <div class="article-image">
                            <img class="article-image-img" src="${item.image}" alt="" title="" />
                        </div>
                        <div class="article-content">
                            <span class="article-category">${categoryData.name}</span>
                            <h2 class="article-title">${escapeString(item.title)}</h2>
                            <p class="article-text">${item.description}</p>
                            <span class="article-source">${sourceData.name}</span>
                        </div>
                    </article>
                `;

                bigArticleContainer.appendChild(template.content);
            });

            const smallArticles = data.items.slice(6, 12);
            const smallArticleContainer = document.querySelector('.smallArticles');

            smallArticles.forEach((item) => {
                const template = document.createElement('template');
                const sourceData = data.sources.find((sourceItem) => sourceItem.id === item.source_id);
                const dateData = new Date(item.date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });

                template.innerHTML = `
                    <article class="articles-list">
                        <h2 class="articles-list-title">${escapeString(item.title)}</h2>
                        <div class="articles-list-content">
                            <span class="articles-list-date">${dateData}</span>
                            <span class="articles-list-source">${sourceData.name}</span>
                        </div>
                    </article>
                `;

                smallArticleContainer.appendChild(template.content);
            });
        })
}