// Selecciona el elemento donde deseas insertar el contenido
const faqContent = document.getElementById('faq-content');

// Define el HTML que deseas insertar
const htmlContent = `
<section class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="accordion">
            <div class="accordion-item">
                <button class="accordion-header">How can I use this to build my brand?</button>
                <div class="accordion-content">
                    <p>We provide a lot of expert-backed answers, build upon that adding your own voice, knowledge, experience, point of view and opinions, that is the only way to build a solid personal brand. Sharing generic content could help to create awareness, but personal brand is about differentiation.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">How do you find and select the questions?</button>
                <div class="accordion-content">
                    <p>We leverage advanced analytics, social research tools, and our professional content creation expertise to filter data and identify the most relevant topics and questions. </p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">Are you subject matter experts?</button>
                <div class="accordion-content">
                    <p>No, we are not subject matter experts, but we don't need to be. Our role is to provide foundational content for your expertise. We base our research on trusted and reputable sources, such as government websites, academic publications, specialized media, industry professionals, and credible organizations.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">Do you use AI?</button>
                <div class="accordion-content">
                    <p>Yes, it allows us to offer the service providing a quality research at such comfortable price. AI takes care of operative tasks while we humans focus on strategy and methodology.</p>
                </div>
            </div>
            
            <div class="accordion-item">
                <button class="accordion-header">Who is behind The Content Bang Theory?</button>
                <div class="accordion-content">
                    <p>We are a family of Colombians living in Canada who, like many migrants, decided to reinvent ourselves. With long and successful corporate careers— Juan in Digital Marketing and Margarita in Customer Experience— we decided to use our expertise, passion, and the aspects we loved most about our work into creating something unique and meaningful.</p>

                    <p>Expert-Quality content is a necesity on our world. A strong personal brand is a must for any professional. But creating both requires significant resources: time, effort, and costly tools for even basic research. That's why The Content Bang Theory exists — to help you build your personal brand by providing high-quality, relevant content with minimal resource investment.</p>

                    <h3>Juan Carlos Vasquez</h3>
                    <p>The Big Bang Theory fan here. I have always been passionate about researching information, analyzing data, and combining insights to create exceptional content. Over the years, I've had the privilege of working with renowned brands such as Colgate, Hill's, Tom's of Maine, Vanguard, Coca-Cola, and Kia. While creating content, I identified the ideation stage as the most challenging and critical for a content campaign, requiring extensive research and analysis. That's why I wanted to develop a solution that save time and energy, helping others navigate this crucial phase with ease.</p>

                    <h3>Margarita Sanchez</h3>
                    <p>Graphic designer, marketer, and holder of a master's degree in Digital Transformation, I am the strategist behind product conception, development, and continuous improvement. My work is focused in enhancing user experience and delivering real value. I thrive on listening to users' needs and translating their feedback into actionable improvements, ensuring that our service provides a seamless, satisfying experience.</p>
                </div>
            </div>
        </div>     
       
    </section>

`;

// Inserta el contenido dentro del elemento
faqContent.innerHTML = htmlContent;
