// Selecciona el elemento donde deseas insertar el contenido
const benefitsContent = document.getElementById('benefits-content');

// Define el HTML que deseas insertar
const benefitshtmlContent = `
<section class="benefits">
        <div class="container">
            <h2>For each question you get</h2>
            <ul>
                <li class="star"><b>Expert-Backed Answer:</b> Well-structured, informative content based on reliable sources, providing a solid foundation for your expertise.</li>
                <li class="star">Content adapted for <b>Facebook, YouTube, Blog, TikTok and Instagram</b></li>
            </ul>
        </div>
    </section>

    <section class="benefits2">
        <div class="container">
            <h2>Once a month you get</h2>
            <ul>
                <li class="star"><b>Digital tactics report:</b> So you can learn about the most effective current marketing strategies, along with a step-by-step guide to help you use them too.</li>
                <li class="star">One-on-One Consulting: <b>A live analysis of a subscriber's content strategy (selected at random, so just by being part of it, you have a chance to receive feedback on your content strategy).</b></li>
            </ul>
        </div>
    </section>

`;

// Inserta el contenido dentro del elemento
benefitsContent.innerHTML = benefitshtmlContent;
