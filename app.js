function render(variables = {}) {
    let cover = variables.includeCover === 'true' ? `<div class="cover"><img src="https://images.unsplash.com/photo-1557683316-973673baf926" /></div>` : "";
    let socialMediaPositionClass = variables.socialMediaPosition || "position-right";
    let socialLinks = '';
    if (variables.twitter) socialLinks += `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`;
    if (variables.github) socialLinks += `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`;
    if (variables.linkedin) socialLinks += `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`;
    if (variables.instagram) socialLinks += `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`;

    document.querySelector("#widget_content").innerHTML = `
        <div class="widget">
            ${cover}
            <img src="https://randomuser.me/api/portraits/men/75.jpg" class="photo" alt="Profile Photo">
            <h1>${variables.name || ''} ${variables.lastName || ''}</h1>
            <h2>${variables.role || ''}</h2>
            <h3>${variables.city || ''}, ${variables.country || ''}</h3>
            <ul class="${socialMediaPositionClass}">
                ${socialLinks}
            </ul>
        </div>
    `;
}

window.onload = function() {
    window.variables = {
        includeCover: true,
        socialMediaPosition: "position-right",
        twitter: null,
        github: null,
        linkedin: null,
        instagram: null,
        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    };
    render(window.variables);

    document.querySelectorAll(".picker").forEach(function(elm) {
        elm.addEventListener("change", function() {
            const attribute = this.getAttribute("for");
            window.variables[attribute] = this.value;
            render(window.variables);
        });
    });
};
