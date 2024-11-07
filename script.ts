// Get references to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;

const resumeDisplayElemenr = document.getElementById('resume-display') as HTMLFormElement

// Handle form submission

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload 

    // collectinput input values

    const name =(document.getElementById('name') as HTMLInputElement).value;
    const email =(document.getElementById('email') as HTMLInputElement).value;
    const phone =(document.getElementById('phone') as HTMLInputElement).value;
    const education =(document.getElementById('education') as HTMLInputElement).value;
    const experience =(document.getElementById('experience') as HTMLInputElement).value;
    const skills =(document.getElementById('skills') as HTMLInputElement).value;
    
    // Generate the resume content dynamically
    
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Infomation</h3>
    <p>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // Dosplay the generated resume

    if (resumeDisplayElemenr){
        resumeDisplayElemenr.innerHTML = resumeHTML;
    }else{
        console.error('Resume display area not found');
    }

});



