        <template>
            <section>
                <nav class ="navbar bg-white">
                    <div class="container">
                        <div class = "navbar-content">
                            <div class = "brand-and-toggler">
                                <a href = "index.html" class = "navbar-brand">
                                    <!-- <img src = "assets/images/curriculum-vitae.png" alt = "" class = "navbar-brand-icon"> -->
                                    <span class = "navbar-brand-text">Tik</span> <span>Tak.</span>
                                </a>
                                <button type = "button" class = "navbar-toggler-btn">
                                    <div class = "bars">
                                        <div class = "bar"></div>
                                        <div class = "bar"></div>
                                        <div class = "bar"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
        
                <section id = "about-sc" class = "">
                    <div class = "container">
                        <div class = "about-cnt">
                            <form action="" class="cv-form" id = "cv-form">
                                <div class = "cv-form-blk">
                                    <div class = "cv-form-row-title">
                                        <h3>Informations Personnelles</h3>
                                    </div>
                                    <div class = "cv-form-row cv-form-row-about">
                                        <div class = "cols-3">
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Nom </label>
                                                <input name = "firstname" type = "text" class = "form-control firstname" id = "" @keyup="generateCV()" placeholder="Kouadio">
                                                <span class="form-text"></span>
                                            </div>
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Prenom  <span class = "opt-text"></span></label>
                                                <input name = "middlename" type = "text" class = "form-control middlename" id = "" @keyup="generateCV()" placeholder="Armandine">
                                                <span class="form-text"></span>
                                            </div>
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Date De Naissance</label>
                                                <input name="lastname" type="date" class="form-control lastname" id="" @keyup="generateCV()" placeholder="e.g. Doe" max="2006-12-31">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
        
                                        <div class="cols-3">
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Photo </label>
                                                <input name = "image" type = "file" class = "form-control image" id = "" accept = "image/*" @change="previewImage()">
                                            </div>
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Situation matrimoniale</label>
                                                <select name="designation" class = "form-control designation" id = "" @keyup="generateCV()" placeholder="e.g. Sr.Accountants">
                                                    <Option value="2">celibataire</Option>
                                                    <option value="1">Marié(e)</option>
                                                    <option value="3">Divorcé(e)</option>
                                                    <option value="4">fiancé(e)</option>
                                                </select>
                                                <span class="form-text"></span>
                                            </div>
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Addresse</label>
                                                <input name = "address" type = "text" class = "form-control address" id = "" @keyup="generateCV()" placeholder="Abidjan210">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
        
                                        <div class = "cols-3">
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Email</label>
                                                <input name = "email" type = "text" class = "form-control email" id = "" @keyup="generateCV()" placeholder="e.g. johndoe@gmail.com">
                                                <span class="form-text"></span>
                                            </div>
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Numéro</label>
                                                <input name = "phoneno" type = "text" class = "form-control phoneno" id = "" @keyup="generateCV()" placeholder="076831094" maxlength="10">
                                                <span class="form-text"></span>
                                            </div>
                                            <div class = "form-elem">
                                                <label for = "" class = "form-label">Pays d'origine</label>
                                                <select name="summary" class="form-control summary" id="" @change="generateCV()" >
                                                    <option value="">Sélectionnez un pays</option>
                                                </select>
                                               
                                                                                        <span class="form-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="cv-form-blk">
                                <div class = "cv-form-row-title">
                                    <h3>Cursus</h3>
                                </div>
        
                                <div class = "row-separator repeater">
                                    <div class = "repeater" data-repeater-list = "group-d">
                                        <div data-repeater-item>
                                            <div class = "cv-form-row cv-form-row-experience">
                                                <div class = "cols-3">
                                                    <div class = "form-elem">
                                                        <label for = "" class = "form-label">Année</label>
                                                        <input name = "proj_title" type = "date" class = "form-control proj_title" id = "" @keyup="generateCV()" max="2006-12-31">
                                                        <span class="form-text"></span>
                                                    </div>
                                                    <div class = "form-elem">
                                                        <label for = "" class = "form-label">Diplôme</label>
                                                        <input name = "proj_link" type = "text" class = "form-control proj_link" id = "" @keyup="generateCV()">
                                                        <span class="form-text"></span>
                                                    </div>
                                                    <div class = "form-elem">
                                                        <label for = "" class = "form-label">Etablissement</label>
                                                        <input name = "proj_description" type = "text" class = "form-control proj_description" id = "" @keyup="generateCV()">
                                                        <span class="form-text"></span>
                                                    </div>
                                                </div>
                                                <button data-repeater-delete type = "button" class = "repeater-remove-btn">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "button" data-repeater-create value = "Add" class = "repeater-add-btn">+</button>
                                </div>
                            </div>
        
        
        
        
        
        
                                <div class="cv-form-blk">
                                    <div class = "cv-form-row-title">
                                        <h3>Compétences</h3>
                                    </div>
        
                                    <div class = "row-separator repeater">
                                        <div class = "repeater" data-repeater-list = "group-a">
                                            <div data-repeater-item>
                                                <div class = "cv-form-row cv-form-row-achievement">
                                                    <div class = "cols-2">
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Nom </label>
                                                            <input name = "achieve_title" type = "text" class = "form-control achieve_title" id = "" @keyup="generateCV()" placeholder="Bid Data">
                                                            <span class="form-text"></span>
                                                        </div>
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Description</label>
                                                            <input name = "achieve_description" type = "text" class = "form-control achieve_description" id = "" @keyup="generateCV()" placeholder="Permet de faire du machine learning ">
                                                            <span class="form-text"></span>
                                                        </div>
                                                    </div>
                                                    <button data-repeater-delete type = "button" class = "repeater-remove-btn">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button type = "button" data-repeater-create value = "Add" class = "repeater-add-btn">+</button>
                                    </div>
                                </div>
        
                                <div class="cv-form-blk">
                                    <div class = "cv-form-row-title">
                                        <h3>experience</h3>
                                    </div>
        
                                    <div class = "row-separator repeater">
                                        <div class = "repeater" data-repeater-list = "group-b">
                                            <div data-repeater-item>
                                                <div class = "cv-form-row cv-form-row-experience">
                                                    <div class = "cols-3">
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Poste Occupé</label>
                                                            <input name = "exp_title" type = "text" class = "form-control exp_title" id = "" @keyup="generateCV()">
                                                            <span class="form-text"></span>
                                                        </div>
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Entreprise</label>
                                                            <input name = "exp_organization" type = "text" class ="form-control exp_organization" id = "" @keyup="generateCV()">
                                                            <span class="form-text"></span>
                                                        </div>
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Type Contrat</label>
                                                            <select name="" class = "form-control exp_location" id = "" @keyup="generateCV()">
                                                                <Option> Stagiaire</Option>
                                                                <Option>CDI</Option>
                                                                <Option>CDD</Option>
                                                            </select>
                                                            <span class="form-text"></span>
                                                        </div>
                                                    </div>
        
                                                    <div class = "cols-3">
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Date debut</label>
                                                            <input name = "exp_start_date" type = "date" class = "form-control exp_start_date" id = "" @keyup="generateCV()">
                                                            <span class="form-text"></span>
                                                        </div>
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Date de Fin</label>
                                                            <input name = "exp_end_date" type = "date" class = "form-control exp_end_date" id = "" @keyup="generateCV()">
                                                            <span class="form-text"></span>
                                                        </div>
                                                        <div class = "form-elem">
                                                            <label for = "" class = "form-label">Entreprise</label>
                                                            <input name = "exp_description" type = "text" class = "form-control exp_description" id = "" @keyup="generateCV()">
                                                            <span class="form-text"></span>
                                                        </div>
                                                    </div>
        
                                                    <button data-repeater-delete type = "button" class = "repeater-remove-btn">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button type = "button" data-repeater-create value = "Add" class = "repeater-add-btn">+</button>
                                    </div>
                                </div>
        
                       
        
                                
        
                                <div class="cv-form-blk">
                                    <div class = "cv-form-row-title">
                                        <h3>skills</h3>
                                    </div>
        
                                    <div class = "row-separator repeater">
                                        <div class = "repeater" data-repeater-list = "group-e">
                                            <div data-repeater-item>
                                                <div class = "cv-form-row cv-form-row-skills">
                                                    <div class = "form-elem">
                                                        <label for = "" class = "form-label">Skill</label>
                                                        <input name = "skill" type = "text" class = "form-control skill" id = "" @keyup="generateCV()">
                                                        <span class="form-text"></span>
                                                    </div>
                                                    
                                                    <button data-repeater-delete type = "button" class = "repeater-remove-btn">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button type = "button" data-repeater-create value = "Add" class = "repeater-add-btn">+</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
        
                <section id = "preview-sc" class = "print_area">
                    <div class = "container">
                        <div class = "preview-cnt">
                            <div class = "preview-cnt-l bg-green text-white">
                                <div class = "preview-blk">
                                    <div class = "preview-image">
                                        <img src = "" alt = "" id = "image_dsp"> 
                                    </div>
                                    <div class = "preview-item preview-item-name">
                                        <span class = "preview-item-val fw-6" id = "fullname_dsp"></span>
                                    </div>
                                    <div class = "preview-item">
                                        <span class = "preview-item-val text-uppercase fw-6 ls-1" id = "designation_dsp"></span>
                                    </div>
                                </div>
        
                                <div class = "preview-blk">
                                    <div class = "preview-blk-title">
                                        <h3>Info</h3>
                                    </div>
                                    <div class = "preview-blk-list">
                                        <div class = "preview-item">
                                            <span class = "preview-item-val" id = "phoneno_dsp"></span>
                                        </div>
                                        <div class = "preview-item">
                                            <span class = "preview-item-val" id = "email_dsp"></span>
                                        </div>
                                        <div class = "preview-item">
                                            <span class = "preview-item-val" id = "address_dsp"></span>
                                        </div>
                                        <div class = "preview-item">
                                            <span class = "preview-item-val" id = "summary_dsp"></span>
                                        </div>
                                    </div>
                                </div>
        
                                <div class = "preview-blk">
                                    <div class = "preview-blk-title">
                                        <h3>skills</h3>
                                    </div>
                                    <div class = "skills-items preview-blk-list" id = "skills_dsp">
                                        <!-- skills list here -->
                                    </div>
                                </div>
                            </div>
        
                            <div class = "preview-cnt-r bg-white">
                                <div class = "preview-blk">
                                    <div class = "preview-blk-title">
                                        <h3>Compétences</h3>
                                    </div>
                                    <div class = "achievements-items preview-blk-list" id = "achievements_dsp"></div>
                                </div>
        
                    
        
                                <div class = "preview-blk">
                                    <div class = "preview-blk-title">
                                        <h3>experiences</h3>
                                    </div>
                                    <div class = "experiences-items preview-blk-list" id = "experiences_dsp"></div>
                                </div>
        
                                <div class = "preview-blk">
                                    <div class = "preview-blk-title">
                                        <h3>projects</h3>
                                    </div>
                                    <div class = "projects-items preview-blk-list" id = "projects_dsp"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section class ="print-btn-sc">
                    <div class = "container">
                        <button type = "button" class = "print-btn btn btn-primary" @click="printCV()">Inprimer CV</button>
                    </div>
                </section>
            </section>
            
        </template>

          
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const strRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const digitRegex = /^\d+$/;

    const mainForm = ref(null);
    const validType = {
      TEXT: 'text',
      TEXT_EMP: 'text_emp',
      EMAIL: 'email',
      DIGIT: 'digit',
      PHONENO: 'phoneno',
      ANY: 'any',
    };

    let firstnameElem = ref(null);
    let middlenameElem = ref(null);
    let lastnameElem = ref(null);
    let imageElem = ref(null);
    let designationElem = ref(null);
    let addressElem = ref(null);
    let emailElem = ref(null);
    let phonenoElem = ref(null);
    let summaryElem = ref(null);

    let nameDsp = ref(null);
    let imageDsp = ref(null);
    let phonenoDsp = ref(null);
    let emailDsp = ref(null);
    let addressDsp = ref(null);
    let designationDsp = ref(null);
    let summaryDsp = ref(null);
    let projectsDsp = ref(null);
    let achievementsDsp = ref(null);
    let skillsDsp = ref(null);
    let educationsDsp = ref(null);
    let experiencesDsp = ref(null);

    onMounted(() => {
      // Récupération des éléments du formulaire
      mainForm.value = document.getElementById('cv-form');
      firstnameElem.value = mainForm.value.firstname;
      middlenameElem.value = mainForm.value.middlename;
      lastnameElem.value = mainForm.value.lastname;
      imageElem.value = mainForm.value.image;
      designationElem.value = mainForm.value.designation;
      addressElem.value = mainForm.value.address;
      emailElem.value = mainForm.value.email;
      phonenoElem.value = mainForm.value.phoneno;
      summaryElem.value = mainForm.value.summary;

      // Récupération des éléments d'affichage
      nameDsp.value = document.getElementById('fullname_dsp');
      imageDsp.value = document.getElementById('image_dsp');
      phonenoDsp.value = document.getElementById('phoneno_dsp');
      emailDsp.value = document.getElementById('email_dsp');
      addressDsp.value = document.getElementById('address_dsp');
      designationDsp.value = document.getElementById('designation_dsp');
      summaryDsp.value = document.getElementById('summary_dsp');
      projectsDsp.value = document.getElementById('projects_dsp');
      achievementsDsp.value = document.getElementById('achievements_dsp');
      skillsDsp.value = document.getElementById('skills_dsp');
      educationsDsp.value = document.getElementById('educations_dsp');
      experiencesDsp.value = document.getElementById('experiences_dsp');

      // Ajout des écouteurs d'événements pour la validation du formulaire
      // ...Ajoutez ici les écouteurs d'événements pour les champs de formulaire et les éléments d'affichage
    });

    const fetchValues = (attrs, ...nodeLists) => {
      let elemsAttrsCount = nodeLists.length;
      let elemsDataCount = nodeLists[0].length;
      let tempDataArr = [];

      // first loop deals with the no of repeaters value
      for(let i = 0; i < elemsDataCount; i++){
        let dataObj = {}; // creating an empty object to fill the data
        // second loop fetches the data for each repeaters value or attributes 
        for(let j = 0; j < elemsAttrsCount; j++){
          // setting the key name for the object and fill it with data
          dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
      }

      return tempDataArr;
    };

    const getUserInputs = () => {
      let achievementsTitleElem = document.querySelectorAll('.achieve_title'),
        achievementsDescriptionElem = document.querySelectorAll('.achieve_description');

      // experiences
      let expTitleElem = document.querySelectorAll('.exp_title'),
        expOrganizationElem = document.querySelectorAll('.exp_organization'),
        expLocationElem = document.querySelectorAll('.exp_location'),
        expStartDateElem = document.querySelectorAll('.exp_start_date'),
        expEndDateElem = document.querySelectorAll('.exp_end_date'),
        expDescriptionElem = document.querySelectorAll('.exp_description');

      // education
      let eduSchoolElem = document.querySelectorAll('.edu_school'),
        eduDegreeElem = document.querySelectorAll('.edu_degree'),
        eduCityElem = document.querySelectorAll('.edu_city'),
        eduStartDateElem = document.querySelectorAll('.edu_start_date'),
        eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date'),
        eduDescriptionElem = document.querySelectorAll('.edu_description');

      let projTitleElem = document.querySelectorAll('.proj_title'),
        projLinkElem = document.querySelectorAll('.proj_link'),
        projDescriptionElem = document.querySelectorAll('.proj_description');

        let skillElem = document.querySelectorAll('.skill');

// event listeners for form validation
firstnameElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
middlenameElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
lastnameElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Last Name'));
phonenoElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.PHONENO, 'Phone Number'));
emailElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
addressElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address'));
designationElem.value.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Designation'));

achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Location")));
expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'School')));
eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
eduCityElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'City')));
eduStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
eduGraduationDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Graduation Date')));
eduDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
projTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
projLinkElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Link')));
projDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
skillElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'skill')));

return {
  firstname: firstnameElem.value,
  middlename: middlenameElem.value,
  lastname: lastnameElem.value,
  designation: designationElem.value,
  address: addressElem.value,
  email: emailElem.value,
  phoneno: phonenoElem.value,
  summary: summaryElem.value,
  achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
  experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
  educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
  projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
  skills: fetchValues(['skill'], skillElem)
}
};

const validateFormData = (elem, elemType, elemName) => {
// Logique de validation
if(elemType == validType.TEXT){
  if(!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
  else removeErrMsg(elem);
}

// checking for only text string
if(elemType == validType.TEXT_EMP){
  if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
  else removeErrMsg(elem);
}

// checking for email
if(elemType == validType.EMAIL){
  if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
  else removeErrMsg(elem);
}

// checking for phone number
if(elemType == validType.PHONENO){
  if(!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
  else removeErrMsg(elem);
}

// checking for only empty
if(elemType == validType.ANY){
  if(elem.value.trim().length == 0){ addErrMsg(elem, elemName);}
  else {removeErrMsg(elem);}
}
};

const addErrMsg = (formElem, formElemName) => {
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
};
  // Logique pour ajouter un message d'erreur


const removeErrMsg = (formElem) => {
  // Logique pour supprimer un message d'erreur
  formElem.nextElementSibling.innerHTML = "";
};

const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
listData.forEach(listItem => {
    let itemElem = document.createElement('div');
    itemElem.classList.add('preview-item');
    
    for(const key in listItem){
        let subItemElem = document.createElement('span');
        subItemElem.classList.add('preview-item-val');
        subItemElem.innerHTML = `${listItem[key]}`;
        itemElem.appendChild(subItemElem);
    }

    listContainer.appendChild(itemElem);
})
  // Logique pour afficher les données de la liste
};

const displayCV = (userData) => {
    nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
phonenoDsp.innerHTML = userData.phoneno;
emailDsp.innerHTML = userData.email;
addressDsp.innerHTML = userData.address;
designationDsp.innerHTML = userData.designation;
summaryDsp.innerHTML = userData.summary;
showListData(userData.projects, projectsDsp);
showListData(userData.achievements, achievementsDsp);
showListData(userData.skills, skillsDsp);
showListData(userData.educations, educationsDsp);
showListData(userData.experiences, experiencesDsp);
  // Logique pour afficher les données du CV
};

const generateCV = () => {
    let userData = getUserInputs();
displayCV(userData);
console.log(userData);

  // Logique pour générer le CV
};

const previewImage = () => {
    let oFReader = new FileReader();
oFReader.readAsDataURL(imageElem.files[0]);
oFReader.onload = function(ofEvent){
    imageDsp.src = ofEvent.target.result;
}
  // Logique pour prévisualiser l'image
};

const printCV = () => {
    window.print();
  // Logique pour imprimer le CV
};

return {
  mainForm,
  validType,
  firstnameElem,
  middlenameElem,
  lastnameElem,
  imageElem,
  designationElem,
  addressElem,
  emailElem,
  phonenoElem,
  summaryElem,
  nameDsp,
  imageDsp,
  phonenoDsp,
  emailDsp,
  addressDsp,
  designationDsp,
  summaryDsp,
  projectsDsp,
  achievementsDsp,
  skillsDsp,
  educationsDsp,
  experiencesDsp,
  fetchValues,
  getUserInputs,
  validateFormData,
  addErrMsg,
  removeErrMsg,
  showListData,
  displayCV,
  generateCV,
  previewImage,
  printCV,
};
}
}


  

</script>


            
   
    
<style scooped >
    @import url('assets/css/main.css');

</style>