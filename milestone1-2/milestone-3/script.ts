// get refrences to the form and display area
const form = document.getElementById('resume-form')as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
form.addEventListener('submit', (event: Event)=> {

event.preventDefault();
    
    


// collect input values 
const name=(document.getElementById('name') as HTMLInputElement).value
const email=(document.getElementById('email') as HTMLInputElement).value
const contact=(document.getElementById('contact') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const experience=(document.getElementById('experience') as HTMLInputElement).value
const Skills=(document.getElementById('Skills') as HTMLInputElement).value

// generate the resume content dynamically



const resumeHTML =`

<h2><b>Resume<b></h2>
<h3>Personal Information</h3>

<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Contact:</b>${contact}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${Skills}</p>

`;


    
    
        











// resumeDisplayElement

if (resumeDisplayElement) {

resumeDisplayElement.innerHTML = resumeHTML;



}else{

    console.error(`The resume display element is missing`);
}
})    







