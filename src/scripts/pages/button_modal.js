// Création du bouton et du formulaire
const button = document.createElement('button');
button.className = 'contact_button';
button.textContent = 'Contactez-moi';
button.setAttribute('aria-haspopup', 'dialog');
button.addEventListener('click', () => displayModal(photographer.name));
photographerHeader.appendChild(button);

// Création du modal avec le formulaire
function displayModal(photographerName) {
    const modalHTML = `
        <div id="contact_modal" class="modal" role="dialog" aria-labelledby="modal-title">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modal-title">Contactez-moi ${photographerName}</h2>
                    <button class="close-modal" aria-label="Fermer">&times;</button>
                </div>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="firstname">Prénom</label>
                        <input 
                            type="text" 
                            id="firstname" 
                            name="firstname" 
                            required 
                            aria-required="true"
                        >
                    </div>
                    <div class="form-group">
                        <label for="lastname">Nom</label>
                        <input 
                            type="text" 
                            id="lastname" 
                            name="lastname" 
                            required 
                            aria-required="true"
                        >
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            aria-required="true"
                        >
                    </div>
                    <div class="form-group">
                        <label for="message">Votre message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            aria-required="true"
                        ></textarea>
                    </div>
                    <button type="submit" class="submit-button">Envoyer</button>
                </form>
            </div>
        </div>
    `;

    // Ajouter le modal au DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Récupérer les éléments du modal
    const modal = document.getElementById('contact_modal');
    const closeBtn = modal.querySelector('.close-modal');
    const form = modal.querySelector('form');

    // Gérer la fermeture du modal
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Gérer la soumission du formulaire
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log('Données du formulaire:', Object.fromEntries(formData));
        modal.remove();
    });
}