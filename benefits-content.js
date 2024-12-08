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

`;

// Inserta el contenido dentro del elemento
benefitsContent.innerHTML = benefitshtmlContent;
